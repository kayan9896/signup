import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from './components/details';

export default function App() {
  
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center', paddingTop:20}}>
      <Text style={{justifyContent:'space-evenly'}}>Sign up</Text>
      <Details></Details>
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
