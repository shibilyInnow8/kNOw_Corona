import { createAppContainer } from 'react-navigation';
import React from "react";
import{ Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Preventives from 'app/screens/Preventives';
import Home from 'app/screens/Home';
import Settings from 'app/screens/Settings';
import Images from '../config/images'
import Styles from '../config/styles'
const PreventionIcon = ({ tintColor }) => (
  <Image
  source={Images.icons.tabPreventives}
  style={[{width:45,height:45}, { tintColor: tintColor }]}
/>
);
const HomeIcon = ({ tintColor }) => (
  <Image
  source={Images.icons.tabHome}
  style={[{width:45,height:45}, { tintColor: tintColor }]}
/>
);
const MoreIcon = ({ tintColor }) => (
  <Image
  source={Images.icons.tabSettings}
  style={[{width:45,height:45}, { tintColor: tintColor }]}
/>
);
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        tabBarIcon: HomeIcon
      }
},
"Health info":{
    screen: Preventives,
    navigationOptions: {
        tabBarIcon: PreventionIcon
      }
},
  More: {
    screen: Settings,
    navigationOptions: {
        tabBarIcon: MoreIcon
      }
},
},{
tabBarOptions: {
  activeTintColor: Styles.color.COLOR_WHITE,
  inactiveTintColor: Styles.color.COLOR_GREY,
  style:{
    backgroundColor: Styles.color.COLOR_SECONDARY,
    borderTopWidth: 0,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  }
},

}
);


export default createAppContainer(TabNavigator);
