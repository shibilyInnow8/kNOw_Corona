import { StyleSheet } from 'react-native';
import Style from '../../config/styles';
import { getWidth, getHeight } from "../../utils/pixel-resolver";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  viewWrapper:{width:'100%',
  height:50,justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row',
  paddingHorizontal:getWidth(15),
  borderBottomWidth:1,
  borderBottomColor:Style.color.COLOR_SECONDARY
  },
  iconsWrapper:{tintColor:Style.color.COLOR_VIOLET,
    width:getWidth(20),height:getWidth(20),
    resizeMode:'contain',marginRight:getWidth(10)},
    logoImage:{
      width:getWidth(150),height:getWidth(150),
      resizeMode:'contain',marginRight:getWidth(10)
    }
    
});

export default styles;
