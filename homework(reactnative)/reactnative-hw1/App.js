import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import {Provider} from 'react-redux'
import store from './redux'

import {RootDrawer} from './navigation/RootDrawer'
import {loadFonts} from './styles/fonts'
import { CustomText } from './components';


export default function App() {
  const [loaded,setLoaded]=useState(false);
  if(!loaded) {
    return(
      <AppLoading 
      startAsync={loadFonts}
      onFinish= {()=> setLoaded(true)} 
      onError={()=>console.log("Fail")}
      
      />
    );
  }
  return(
    <Provider store={store} >
    <RootDrawer />
    </Provider>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


