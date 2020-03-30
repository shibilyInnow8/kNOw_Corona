import React, { Component } from 'react';
import { View, StatusBar} from 'react-native';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';

class AppNavigator extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#1F2241',flex:1}}>
        <StatusBar backgroundColor="#1F2241" barStyle='light-content'/>
      <NavigationStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      </View>
    );
  }
}

export default AppNavigator;
