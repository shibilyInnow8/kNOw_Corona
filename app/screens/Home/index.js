import React, { Component} from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text,SafeAreaView,ScrollView,RefreshControl,TouchableOpacity,Image,Linking,Dimensions} from 'react-native';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal'
import styles from './styles';
import Style from '../../config/styles'
import { connect } from "react-redux";
import { getGlobalDetails,getCountryDetails,getCountryNews,getCountryTimeline } from '../../actions/homeActions';
import images from '../../config/images'
import { getWidth, getHeight,addCommas } from "../../utils/pixel-resolver";
import moment from 'moment';
import NetInfo from "@react-native-community/netinfo";
import {
  LineChart,
} from "react-native-chart-kit";
class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      pickerVisible: false,
      selectedCountry: {cca2: "IN", name:'India',currency: Array(1), callingCode: Array(1), region: "Asia", subregion: "Southern Asia",},
      buttonVisible:false,
      graphSelected:'case',
      connection:false
    };
  }
componentDidMount(){
  const { getGlobalDetails,getCountryDetails,countryDetails,getCountryNews,
    getCountryTimeline } = this.props;
  const { selectedCountry,connection } = this.state;
  const unsubscribe = NetInfo.addEventListener(state => {
    // console.log("Connection type", state.type);
    this.setState({
      connection:state.isConnected
    })
    // alert(state.isConnected)
    // console.log("Is connected?", state.isConnected);
  });
  setTimeout(()=> {
    this.onRefresh();
  }, 800);
 
  
}
onRefresh=()=>{
  const { getGlobalDetails,getCountryDetails,countryDetails,getCountryNews,getCountryTimeline } = this.props;
  const { selectedCountry,connection } = this.state;
  if(connection){
  getGlobalDetails();
  getCountryDetails(countryDetails);
  getCountryNews(countryDetails);
  getCountryTimeline(countryDetails)
  }
  else{
    alert('It seems like you are offline please check your internet and try again.')
  }
}
onSelectCountry = (country: Country) => {
  const { getGlobalDetails,getCountryDetails,getCountryNews,getCountryTimeline } = this.props;
  const { selectedCountry,connection } = this.state;
  if(connection){
  this.setState(
    {
      selectCountry: false,
      selectedCountry: country

    },()=>{
      getGlobalDetails();
      getCountryDetails(country)
      getCountryNews(country);
      getCountryTimeline(country);
    });
  }
  else{
    alert('It seems like you are offline please check your internet and try again.')
  }
  
};
toggleModal=()=>{
  const { pickerVisible } = this.state;
  this.setState({
    pickerVisible:!pickerVisible
  })
}
onScroll=(event)=>{
  if(event.nativeEvent.contentOffset.y!==0){
    if(!this.state.buttonVisible){
    this.setState({buttonVisible:true})
    }
  }
  else if(event.nativeEvent.contentOffset.y===0){
    this.setState({buttonVisible:false})
  }
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
renderNews=(item)=>{
return(
  <TouchableOpacity style={{width:'95%',alignSelf:'center',marginVertical:10,
  borderRadius:10,
  backgroundColor:Style.color.COLOR_SECONDARY,height:100,alignItems:'center',flexDirection:'row'}}
  onPress={()=>this.handleClick(item.url)
  }
  activeOpacity={0.6}
  
  >
    <Image style={{width:90,height:90,resizeMode:'cover',borderRadius:10,marginLeft:10}} source={{uri:item.image?
    item.image:'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'}}/>
    <Text style={{width:'60%',color:Style.color.COLOR_WHITE,fontSize:16,marginLeft:10,height:'90%',fontWeight:'900'}}
    numberOfLines={4}
    >{item.title}</Text>
    </TouchableOpacity>
)
}
graphState=(selected)=>{
this.setState({
  graphSelected:selected
})
}
  render(){
    const { refreshing,globalData,countryData,countryDetails,countryNews,countryTimeline } = this.props
    const {pickerVisible,selectedCountry,buttonVisible,graphSelected}=this.state
    let newsData=[];
    let graphDataX=[0];
    let graphDataY=[0];
    let dataShouldRender;
    if(countryTimeline&&countryTimeline[0]){
     
      if(graphSelected==='case'){
        dataShouldRender="total_cases"
      }
       
      else if(graphSelected==='death'){
        dataShouldRender="total_deaths"
      }
      else{
        dataShouldRender="total_recoveries"
      }
      
      let firstDay = new Date();
      firstDay.setDate( firstDay.getDate() - 5 );
       const firstKey =moment(firstDay).format('M/DD/YY');
       const firstData= countryTimeline[0][firstKey]
       firstDay=moment(firstDay).format('MMM-DD');
       if(typeof firstData!=='undefined' ){
        graphDataX.splice(0,1);
        graphDataY.splice(0,1)
       graphDataX.push(firstDay);
       graphDataY.push(firstData[dataShouldRender]);
       }
       let secondDay = new Date();
       secondDay.setDate( secondDay.getDate() - 4 );
        const secondKey =moment(secondDay).format('M/DD/YY');
        const secondData= countryTimeline[0][secondKey]
        secondDay=moment(secondDay).format('MMM-DD');
        if(typeof secondData!=='undefined' ){
        graphDataX.push(secondDay);
        graphDataY.push(secondData[dataShouldRender])
        }

        let thirdDay = new Date();
        thirdDay.setDate( thirdDay.getDate() - 3 );
         const thirdKey =moment(thirdDay).format('M/DD/YY');
         const thirdData= countryTimeline[0][thirdKey]
         thirdDay=moment(thirdDay).format('MMM-DD');
         if(typeof thirdData!=='undefined' ){
         graphDataX.push(thirdDay);
         graphDataY.push(thirdData[dataShouldRender])
         }

         let fourthDay = new Date();
         fourthDay.setDate( fourthDay.getDate() - 2 );
          const fourthKey =moment(fourthDay).format('M/DD/YY');
          const fourthData= countryTimeline[0][fourthKey]
          fourthDay=moment(fourthDay).format('MMM-DD');
          if(typeof fourthData!=='undefined' ){
          graphDataX.push(fourthDay);
          graphDataY.push(fourthData[dataShouldRender])
          }

          let fifthDay = new Date();
          fifthDay.setDate( fifthDay.getDate() - 1 );
           const fifthKey =moment(fifthDay).format('M/DD/YY');
           const fifthData= countryTimeline[0][fifthKey]
           fifthDay=moment(fifthDay).format('MMM-DD');
           console.log('data',typeof fifthData )
           if(typeof fifthData!=='undefined' ){
           graphDataX.push(fifthDay);
           graphDataY.push(fifthData[dataShouldRender])
           }

    }
    if(countryNews&&countryNews[0]){
      const tempData= Object.values(countryNews[0]);
      newsData= tempData.filter((item,index)=>index>tempData.length-50)
      newsData=newsData.reverse();
    }
    
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}> 
        <ScrollView
        ref='_scrollView'
        contentContainerStyle={{flexGrow:1}}
        onScroll={this.onScroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
        }
        >
        <TouchableOpacity onPress={()=>this.toggleModal()} style={styles.pickerWrapper}>
       <View style={styles.pickerFlagWrapper}>
        <CountryPicker
        {...{
          countryCode: countryDetails.cca2,
          withFilter: true,
          withFlag: true,
          withCountryNameButton: false,
          withAlphaFilter: true,
          withCallingCode: true,
          withEmoji: true,
          onSelect: this.onSelectCountry,
          onClose:this.toggleModal,
          theme:{
          primaryColor: '#ccc',
          primaryColorVariant: '#eee',
          backgroundColor: Style.color.COLOR_PRIMARY,
          onBackgroundTextColor: '#ffffff',
          fontSize: 16,
          }
        }}
        visible={pickerVisible} 
      />
      <Text style={styles.countryName} numberOfLines={1}>
        {countryDetails.name.toLocaleUpperCase()}
        </Text>
      </View>
      <Image style={styles.dropdownImage} source={images.icons.dropdown}/>
                    </TouchableOpacity>
                    <View style={styles.borderLineView}/>
                    {countryDetails.name.toLocaleUpperCase()==='INDIA'&&
                    <TouchableOpacity
                    animation="slideInDown"
                    style={{
                      width:'100%',
                      height:getHeight(70),
                      backgroundColor:Style.color.COLOR_SECONDARY,
                      alignItems:'center',
                      flexDirection:'row',
                      paddingHorizontal:getWidth(15)
                    }}
                    onPress={()=>this.handleClick('https://pmnrf.gov.in/en/online-donation')}
                    activeOpacity={0.6}
                    >
                    <Image source={images.icons.satyamev} style={{width:getHeight(40),height:getHeight(40),resizeMode:"contain"}}/>
                    {/* <Image source={images.icons.a} style={{width:getHeight(40),height:getHeight(40),resizeMode:"contain"}}/> */}
                    <View>
                    <Text style={{color:Style.color.COLOR_WHITE,fontSize:getHeight(18)}}>
                      PM CARES Fund
                    </Text>
                    <Text style={{color:Style.color.COLOR_WHITE,fontSize:getHeight(14)}}>
                      Click here to donate to India's war against COVID-19.
                    </Text>
                    </View>
                      </TouchableOpacity>
                    }
                    
                    <View style={styles.countryStatusMainView}>

                      <TouchableOpacity 
                      onPress={()=>this.graphState('case')}
                      activeOpacity={0.6} style={[styles.countryStatusWrapper,{backgroundColor:'#F55165'}]}>
                        <Text style={styles.countryStatusText}>{
                          countryData[0]&&countryData[0].total_cases?addCommas(countryData[0].total_cases):
                          countryData[0]&&countryData[0].total_cases===0?'0':
                          '----'}</Text>
                        <Text style={styles.countryStatusTitle}>Total cases</Text>
                        </TouchableOpacity>

                      <TouchableOpacity 
                      onPress={()=>this.graphState('death')}
                      activeOpacity={0.6} style={[styles.countryStatusWrapper,{backgroundColor:'#7033FD'}]}>
                      <Text style={styles.countryStatusText}>{countryData[0]&&countryData[0].total_deaths?addCommas(countryData[0].total_deaths):
                        countryData[0]&&countryData[0].total_deaths===0?'0':
                        '----'}</Text>
                        <Text style={styles.countryStatusTitle}>Deaths</Text>
                        </TouchableOpacity>


                      <TouchableOpacity 
                      onPress={()=>this.graphState('recover')}
                      activeOpacity={0.6} style={[styles.countryStatusWrapper,{backgroundColor:'#4DE1FF'}]}>
                      <Text style={styles.countryStatusText}>{countryData[0]&&countryData[0].total_recovered?addCommas(countryData[0].total_recovered):
                        countryData[0]&&countryData[0].total_recovered===0?'0':
                        '----'}</Text>
                        <Text style={styles.countryStatusTitle}>Recovered</Text>
                      </TouchableOpacity>


                      </View>
                        <View style={{width:'100%',alignItems:'center'}}>
                        <LineChart
    data={{
      labels: graphDataX,
      datasets: [
        {
          data:graphDataY
        }
      ]
    }}
    width={Dimensions.get("window").width*0.95} // from react-native
    height={getHeight(280)}
   
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      barPercentage:1,
      backgroundColor: Style.color.COLOR_SECONDARY,
      backgroundGradientFrom: Style.color.COLOR_SECONDARY,
      backgroundGradientTo: Style.color.COLOR_PRIMARY,
      backgroundGradientToOpacity:1,
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(130, 166, 249, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(107, 114, 269, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#83A4EE"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
                         </View >
                         <Text style={{color:Style.color.COLOR_VIOLET_LIGHT,fontSize:16,alignSelf:'center',marginBottom:10}}>{graphDataY.length===0?"Graph data not available":graphSelected==='case'?`Total cases reported in last ${graphDataY.length} days`:
                         graphSelected==='death'?`Total death reported in last ${graphDataY.length} days`:
                         `Total recoveries reported in last ${graphDataY.length} days`
                           }</Text>
                      <View style={styles.worldStatusWrapper}>
                          <View style={styles.worldStatusView1}>
                          <Image style={styles.worldImage} source={images.icons.world}/>
                          <Text style={styles.worldHeaderText}>Worldwide Status</Text>
                          </View>
                      <View style={styles.worldStatusView2}>
                        <View style={styles.worldStatusView3}>
                        <Text style={styles.countryStatusText}>{globalData&&globalData[0]&&globalData[0].total_cases?addCommas(globalData[0].total_cases):'----'}</Text>
                        <Text style={styles.countryStatusTitle}>Confirmed</Text>
                          </View>
                        <View style={styles.worldStatusLine}/>
                        <View style={styles.worldStatusView3}>
                        <Text style={styles.countryStatusText}>{globalData&&globalData[0]&&globalData[0].total_deaths?addCommas(globalData[0].total_deaths):'----'}</Text>
                        <Text style={styles.countryStatusTitle}>Deaths</Text>
                        </View>
                        </View>
                        </View>
                        {newsData.length>0&&
                          <Text style={{color:Style.color.COLOR_VIOLET_LIGHT,marginLeft:getWidth(18)
                        ,marginTop:getHeight(20),fontWeight:'bold',fontSize:getWidth(23)}}>News</Text>}
                        {newsData.map(item=>{
                          if(item.newsid){
                          return(
                            this.renderNews(item)
                          )
                          }
                        })}
                        
          </ScrollView>{
            buttonVisible&&
            <TouchableOpacity onPress={()=>this.refs._scrollView.scrollTo({x:0,y:0,animated:true})} style={{position:'absolute',
                        bottom:10,right:15,width:50,height:50,borderRadius:25, shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,backgroundColor:Style.color.COLOR_PRIMARY,
                        justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:20,height:20,resizeMode:'contain',
                        tintColor:Style.color.COLOR_VIOLET_LIGHT}} source={images.icons.upArrow}/>
                        </TouchableOpacity>
          }
          
        </SafeAreaView>
    </View>
  );
}
}
const mapStateToProps = state => ({
  refreshing:state.homeReducer.refreshing,
  globalData:state.homeReducer.globalData,
  countryData:state.homeReducer.countryData,
  countryDetails:state.homeReducer.countryDetails,
  countryNews:state.homeReducer.countryNews,
  countryTimeline:state.homeReducer.countryTimeline
});

export default connect(
  mapStateToProps,
  {
    getGlobalDetails,
    getCountryDetails,
    getCountryNews,
    getCountryTimeline
  }
)(Home);