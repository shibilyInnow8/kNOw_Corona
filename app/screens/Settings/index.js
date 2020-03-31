import React, { Component} from 'react';
import { View, Text,Switch,TouchableOpacity,Image,Linking,SafeAreaView,ScrollView } from 'react-native';
import styles from './styles';
import { connect } from "react-redux";
import Style from '../../config/styles'
import images from '../../config/images'
import { getWidth, getHeight,addCommas } from "../../utils/pixel-resolver";
import Share from 'react-native-share';
import PushNotification from 'react-native-push-notification';
import {setNotificationState} from '../../actions/settingsActions';
class Settings extends Component{
  constructor(props){
    super(props);
    this.state={
      switch:props.notificationState
    }
  }
componentDidMount(){
 
}
openLink=(Link)=>{
  Linking.canOpenURL(Link).then(supported => {
    if (supported) {
      Linking.openURL(Link);
    } else {
      // console.log("Don't know how to open URI: " + this.props.url);
    }
  });
}
share=(mode)=>{
  if(mode==='feedback'){
    const shareOptions = {
      title: 'Feedback',
      subject:'Feedback about kNOw Corona',
      message: 'some message',
      url: '',
      social: Share.Social.EMAIL,
      email:'contact@innow8apps.com'
  };
  Share.shareSingle(shareOptions);
  }
  else{
    const options = {
      title: 'kNOw Corona',
      subject:'kNOw Corona',
      message: 'Download this application to know more about COVID-19.',
      url: '',
    }
    Share.open(options)
    .then((res) => { 
      // console.log(res) 
    }
    )
    .catch((err) => { 
      // err &&
      //  console.log(err);
       });
  }
 
}

toggleSwitch=(state)=>{
  const { setNotificationState,notificationState } = this.props;
  setNotificationState(!notificationState)
  if(state){
    alert('You will receive handwash alert every one hour.')
  // let nextHour = new Date();
  // nextHour.setDate(nextHour.getDate() + 1);
  // nextHour.setHours(nextHour.getHours() - 1);
  // alert(nextHour)
  PushNotification.cancelAllLocalNotifications();
  PushNotification.localNotificationSchedule({
    /* Android Only Properties */
    vibrate: true,
    vibration: 300,
    priority: 'hight',
    visibility: 'public',
    importance: 'hight',
    // bigText:'Handwash Alert!',
    /* iOS and Android properties */
    message:'Please wash your hand with soap', // (required)
    playSound: false,
    number: 1,
    // actions: '["OK"]',

    // for production
    repeatType: 'hour', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    date: new Date(Date.now() + 3600 * 1000),

    // test to trigger each miniute
    // repeatType: 'minute',
    // date: new Date(Date.now()),

    // test to trigger one time
    // date: nextHour,
  });
}
else{
  PushNotification.cancelAllLocalNotifications();
}
}
  render(){
    const { notificationState } = this.props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex:1}}>
     <View style={styles.viewWrapper}>
       <Text style={{color:Style.color.COLOR_WHITE,fontSize:16}}>Enable handwash alert</Text>

       <Switch
       trackColor={{ false: Style.color.COLOR_SECONDARY, true:Style.color.COLOR_VIOLET}}
        thumbColor='white'
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={notificationState}
        
       />
       
       </View>
       <TouchableOpacity style={styles.viewWrapper} activeOpacity={0.6} onPress={()=>
         this.openLink('https://www.youtube.com/playlist?list=PL9S6xGsoqIBU2V6AZYGlJwZRAFJ3YDreb')
         }>
       <Text style={{color:Style.color.COLOR_WHITE,fontSize:16}}>Videos on youtube</Text>
       <Image style={{tintColor:Style.color.COLOR_VIOLET,
       width:getWidth(20),height:getWidth(20),
       resizeMode:'contain',marginRight:getWidth(10)}} source={images.icons.youtube}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.viewWrapper} activeOpacity={0.6}
       onPress={()=>this.share('share')}
       >
       <Text style={{color:Style.color.COLOR_WHITE,fontSize:16}}>Share</Text>
       <Image style={styles.iconsWrapper} source={images.icons.share}/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.viewWrapper} activeOpacity={0.6}
       onPress={()=>
         this.props.navigation.navigate('About')
         }
       >
       <Text style={{color:Style.color.COLOR_WHITE,fontSize:16}}>About us</Text>
       <Image style={styles.iconsWrapper} source={images.icons.aboutUs}/>
       </TouchableOpacity>

       <TouchableOpacity style={styles.viewWrapper} activeOpacity={0.6}
       onPress={()=>this.share('feedback')}
       >
       <Text style={{color:Style.color.COLOR_WHITE,fontSize:16}}>Feedback</Text>
      <Image style={styles.iconsWrapper} source={images.icons.feedback}/>
       </TouchableOpacity>
         <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
         <Image style={styles.logoImage} source={images.icons.logo}/>
         
           </View>
           <View style={{width:'100%',alignItems:'center',position:'absolute',bottom:10}}>
             <Text style={{color:Style.color.COLOR_WHITE,marginRight:10,textAlign:'center',fontSize:getHeight(14)}}>Powered by</Text>
           <Image 
         style={{width:getWidth(100),height:getHeight(40),resizeMode:'contain',marginRight:10,marginTop:5}} 
         source={images.icons.powered_logo}/>
         </View>
         </ScrollView>
    </SafeAreaView>
  );
}
}
const mapStateToProps = state => ({
  notificationState:state.settingsReducer.notificationState
});

export default connect(
  mapStateToProps,
  {
    setNotificationState
  }
)(Settings);