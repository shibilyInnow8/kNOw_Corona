import { StyleSheet } from 'react-native';
import Style from '../../config/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line:{width:'95%',height:1,
  alignSelf:'center',
  backgroundColor:Style.color.COLOR_VIOLET_LIGHT,marginTop:30}
});

export default styles;
