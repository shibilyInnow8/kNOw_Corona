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
class About extends Component{
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


  render(){
    const { notificationState } = this.props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex:1,paddingHorizontal:getWidth(15)}}>
   <View style={{width:'100%',height:getHeight(60),justifyContent:'center',
   borderBottomWidth:1,borderBottomColor:Style.color.COLOR_SECONDARY,
  }}>
     <Text style={{color:Style.color.COLOR_WHITE,alignSelf:'center',
     fontSize:getWidth(16),}}>About Us </Text>
     <TouchableOpacity style={{position:'absolute',
     top:getHeight(0),left:10,width:60,height:getHeight(60),justifyContent:'center' }}
     onPress={()=>this.props.navigation.goBack()}
     activeOpacity={0.6}
     >
     <Image source={images.icons.upArrow} style={{width:getHeight(20),height:getHeight(20),
     resizeMode:'contain',transform: [{ rotate: '-90deg'}],tintColor:Style.color.COLOR_WHITE
     }}/>
     </TouchableOpacity>
     </View>
     <Image source={images.icons.powered_logo} style={{width:getHeight(150),height:getHeight(100),
     resizeMode:'contain',
     alignSelf:'center'
     }}/>
     <Text style={{color:Style.color.COLOR_WHITE,lineHeight:getHeight(30),fontSize:16,textAlign:'justify'}}>{`Innow8 Apps is a leading web and mobile app development company offering services across the globe. At INNOW8, we believe every idea holds immense promise, and therefore, we impart innovation and intelligence to transform your vision into an impeccable reality. 

We emphasize enterprise-grade B2B, B2C, and applications that bring value to your life and build long-term strategic partnerships with our clients while taking pride in exceeding their expectations using our in-depth engineering skills, and advanced design aesthetic.


       `}</Text>
       <TouchableOpacity style={{width:getHeight(160),
       height:getHeight(60),
       flexDirection:'row',
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',
       alignSelf:'center',backgroundColor:Style.color.COLOR_VIOLET}}
        activeOpacity={0.6}
     onPress={()=>this.openLink('https://www.innow8apps.com/')}
     >
     <Text style={{color:Style.color.COLOR_WHITE,lineHeight:getHeight(30),fontSize:16,fontSize:getHeight(20)}}>Know more</Text>
     <Image source={images.icons.upArrow} style={{width:getHeight(15),height:getHeight(15),marginTop:2,
     marginLeft:10,
     resizeMode:'contain',transform: [{ rotate: '90deg'}],tintColor:Style.color.COLOR_WHITE
     }}/>
     </TouchableOpacity>
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
)(About);