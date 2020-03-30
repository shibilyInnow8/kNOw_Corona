import React, { Component} from 'react';
import { View, Text,Dimensions,ScrollView,TouchableOpacity,Linking } from 'react-native';
import styles from './styles';
import { connect } from "react-redux";
import { TabView, TabBar } from 'react-native-tab-view';
import { getWidth, getHeight,addCommas } from "../../utils/pixel-resolver";
import { Thumbnail } from 'react-native-thumbnail-video';
import Style from '../../config/styles';
import { preventionVideoData} from '../../assets/data/staticData'
class Preventives extends Component{
  constructor(props){
    super(props);
    this.state={
      tabs:[
        { key: 'overview', title: 'OVERVIEW' },
        { key: 'symptoms', title: 'SYMPTOMS' },
        { key: 'prevention', title: 'PREVENTION' },
        { key: 'treatments', title: 'TREATMENTS' },
      ],
      selectedIndex:0
    }
  }
componentDidMount(){
  
}
handleClick = (Link) => {
  Linking.canOpenURL(Link).then(supported => {
    if (supported) {
      Linking.openURL(Link);
    } else {
      // console.log("Don't know how to open URI: " + this.props.url);
    }
  });
};
renderOverView=()=>{
  return(
    <ScrollView style={{flex:1}}>
      <Text style={{color:Style.color.COLOR_WHITE,paddingHorizontal:15,paddingTop:20,fontSize:16,lineHeight:getHeight(35)}}>
        {`Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.

The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.`}
      </Text>
      <View style={{overflow:'hidden',width:'90%',alignSelf:'center',borderRadius:10,marginTop:20}}>
      <Thumbnail 
      iconStyle={{tintColor:'#F50103'}}
      url="https://www.youtube.com/watch?v=mOV1aBVYKGA&list=PL9S6xGsoqIBU2V6AZYGlJwZRAFJ3YDreb&index=1" />
      </View>
      <View style={styles.line}/>
      <Text style={{color:Style.color.COLOR_WHITE,
      paddingHorizontal:15,marginBottom:30,
      paddingTop:20,fontSize:16,lineHeight:getHeight(35)}}>
        {`How it spreads

Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.`}
      </Text>
      </ScrollView>
  )
}
renderSymptoms=()=>{
  return(
    <ScrollView style={{flex:1}}>
      <Text style={{color:Style.color.COLOR_WHITE,paddingHorizontal:15,paddingTop:20,fontSize:16,lineHeight:getHeight(35)}}>
        {`People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment.

More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.`}
      </Text>
      <View style={styles.line}/>
      <Text style={{color:Style.color.COLOR_WHITE,paddingHorizontal:15,
        marginBottom:30,
      paddingTop:20,fontSize:16,lineHeight:getHeight(35)}}>
        {`People may experience:
• cough
• fever
• tiredness
• difficulty breathing (severe cases)`}
      </Text>
      </ScrollView>
  )
}
renderPreventionList=(item)=>{
  return(
    <TouchableOpacity style={{width:'95%',alignSelf:'center',marginVertical:10,
    borderRadius:10,
    backgroundColor:Style.color.COLOR_SECONDARY,height:100,alignItems:'center',flexDirection:'row'}}
    onPress={()=>this.handleClick(item.link)
  }
  activeOpacity={0.6}
    
    >
    <View style={{width:90,height:90,overflow:'hidden',borderRadius:10}}>
    <Thumbnail 
    iconStyle={{tintColor:Style.color.COLOR_WHITE,width:30,height:30,resizeMode:'contain'}}
    imageWidth={100}
    imageHeight={100}
    url={item.link}/>
    </View>
      <Text style={{width:'60%',color:Style.color.COLOR_WHITE,fontSize:16,marginLeft:10,height:'90%',fontWeight:'900'}}
      numberOfLines={4}
      >{item.title}</Text>
      </TouchableOpacity>
  )
}
renderPrevention=()=>{
  return(
    <ScrollView style={{flex:1}}
    >
      <Text style={{color:Style.color.COLOR_WHITE,paddingHorizontal:15,
      lineHeight:getHeight(35),paddingTop:20,fontSize:16,}}>
        {`There’s currently no vaccine to prevent coronavirus disease (COVID-19).`}
      </Text>
      <View style={styles.line}/>
      <Text style={{color:Style.color.COLOR_WHITE,paddingHorizontal:15,
      paddingTop:20,fontSize:16,lineHeight:getHeight(35),marginBottom:30}}>
        {`You can protect yourself and help prevent spreading the virus to others if you:

Do

• Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub
• Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze
• Avoid close contact (1 meter or 3 feet) with people who are unwell
• Stay home and self-isolate from others in the household if you feel unwell

Don't

• Touch your eyes, nose, or mouth if your hands are not clean`}
      </Text>
      <Text style={{color:Style.color.COLOR_VIOLET_LIGHT,marginLeft:getWidth(18)
                        ,marginTop:getHeight(20),fontWeight:'bold',fontSize:getWidth(23)}}>Videos For More Info</Text>
                        {preventionVideoData.map(item=>{
                            return this.renderPreventionList(item)
                        })}
      </ScrollView>
  )
}
renderTreatments=()=>{
  return(
    <ScrollView style={{flex:1}}>
      <Text style={{color:Style.color.COLOR_WHITE,paddingHorizontal:15,paddingTop:20,fontSize:16,lineHeight:getHeight(35)}}>
        {`There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe.`}
      </Text>
      <View style={styles.line}/>
      <Text style={{color:Style.color.COLOR_WHITE,
      paddingHorizontal:15,
      paddingTop:20,fontSize:16,
      marginBottom:30,
      lineHeight:getHeight(35)}}>
        {`If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.`}
      </Text>
      </ScrollView>
  )
}
renderScene=()=>{
  const { selectedIndex } = this.state;
  return(
 <View style={{flex:1}}>
    {selectedIndex===0?this.renderOverView()
    :selectedIndex===1?this.renderSymptoms():
    selectedIndex===2?this.renderPrevention():
    this.renderTreatments()
    }
 </View>
  );
}
renderLabel = (scene: Scene) => {
  const label = scene.route.title
  return <Text style={{ color: scene.focused?  Style.color.COLOR_WHITE : Style.color.COLOR_VIOLET_LIGHT ,fontSize:getWidth(10)}} >{label}</Text>
}
setIndex=(index)=>{
  this.setState({
    selectedIndex:index
  })
}
  render(){
    const initialLayout = { width: Dimensions.get('window').width };
  return (
  
      <TabView
      navigationState={{ index:this.state.selectedIndex, routes:this.state.tabs }}
      renderScene={()=>this.renderScene()}
      onTabPress={this.setIndex}
      swipeEnabled={false}
      onIndexChange={this.setIndex}
      initialLayout={{ width: Dimensions.get('window').width*2 }}
      renderTabBar={props => <TabBar {...props} 
      indicatorStyle={{ backgroundColor: 'white' }}
      activeColor='red'
      labelStyle={{color:Style.color.COLOR_VIOLET_LIGHT,fontSize:getWidth(10),}}
      style={{backgroundColor:Style.color.COLOR_SECONDARY}}
      renderLabel={this.renderLabel}
      />
      }
      
    />
   
  );
}
}
const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {
    
  }
)(Preventives);