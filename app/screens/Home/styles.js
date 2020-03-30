import { StyleSheet } from 'react-native';
import Styles from '../../config/styles'
import { getWidth, getHeight } from "../../utils/pixel-resolver";
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor:Styles.color.COLOR_PRIMARY
  },
  pickerWrapper:{width:'100%',height:getHeight(50),
  justifyContent:'space-between',flexDirection:'row',alignItems:'center',paddingHorizontal:getWidth(15)},
  pickerFlagWrapper:{flexDirection:'row',justifyContent:'center'},
  dropdownImage:{width:getWidth(13),height:getWidth(13),resizeMode:'contain',marginTop:getHeight(5)},
  countryName:{color:Styles.color.COLOR_WHITE,marginLeft:getWidth(5),marginTop:getHeight(3),width:'85%'},
  borderLineView:{width:'95%',height:1,backgroundColor:Styles.color.COLOR_SECONDARY,alignSelf:'center'},
  countryStatusWrapper:{width:getWidth(105),
                        height:getWidth(105),
                        borderRadius:getWidth(10),
                        backgroundColor:'red',
                        marginHorizontal:getWidth(10),
                        justifyContent:'center',alignItems:'center'},
  countryStatusText:{color:Styles.color.COLOR_WHITE,fontSize:getWidth(25),fontWeight:'bold',textAlign:'center'},
  countryStatusTitle:{color:Styles.color.COLOR_WHITE,fontSize:getWidth(16),textAlign:'center'},
  countryStatusMainView:{
    flexGrow: 1,
  marginTop:getHeight(15),
  paddingVertical:getHeight(15),
  // justifyContent:'space-between',
  flexDirection:'row'
  },
  worldStatusWrapper:{marginVertical:getHeight(10),
    backgroundColor:Styles.color.COLOR_VIOLET,width:'91%',
    height:getHeight(180),alignSelf:'center',borderRadius:getWidth(10)},
    worldStatusView1:{width:'100%',
    borderBottomWidth:getWidth(1),
    borderBottomColor:"#7D41FC",
    height:getHeight(50),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    },
    worldImage:{width:getWidth(23),
      height:getWidth(23),
      tintColor:Styles.color.COLOR_WHITE,resizeMode:'contain'},
      worldHeaderText:{color:Styles.color.COLOR_WHITE,
        fontWeight:'bold',
        fontSize:getWidth(18),marginLeft:getWidth(3)},
        worldStatusView2:{flexDirection:'row',width:'100%',marginTop:getHeight(10),justifyContent:'center',alignItems:'center'},
        worldStatusView3:{width:'49%',height:getHeight(100),
        justifyContent:'center',alignItems:'center'},
        worldStatusLine:{width:getWidth(1),height:getHeight(100),backgroundColor:'#7D41FC'}
});

export default styles;
