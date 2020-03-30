/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React,{ Component } from 'react';
import { ActivityIndicator,View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
const { persistor, store } = configureStore();
import SplashScreen from 'react-native-splash-screen'
import * as Animatable from 'react-native-animatable';
export default class Entrypoint  extends Component {
  componentDidMount() {
      SplashScreen.hide();
  }
  render(){
  return (
    <Provider store={store}>
      <PersistGate loading={
        <View style={{backgroundColor:'#1F2241',flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator color='white' size='large'/>
        </View>
        } persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
}
