import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,NativeModules} from 'react-native';
import GoSellSdkReactNativePlugin from '@tap-payments/gosell-sdk-react-native';



export default function  App() {
  // GoSellSdkReactNativePlugin.NativeModules.RNGosellSdkReactNative.khaled()  // console.log(GoSellSdkReactNativePlugin);
  
  console.log('goSell2');
  console.log(GoSellSdkReactNativePlugin);

  if (GoSellSdkReactNativePlugin&&GoSellSdkReactNativePlugin.khaled)GoSellSdkReactNativePlugin.khaled()
  if (GoSellSdkReactNativePlugin&&GoSellSdkReactNativePlugin.kareem)GoSellSdkReactNativePlugin.kareem((data)=>{console.log(data);})
  // console.log(GoSellSdkReactNativePlugin&& GoSellSdkReactNativePlugin.khaled && GoSellSdkReactNativePlugin.khaled());

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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