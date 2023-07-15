import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from './components/details';

export default function App() {
  
  return (
    <View style={{flex:1, paddingTop:30}}>
      <View style={{alignItems:'center',marginHorizontal:150,borderWidth: 3}}>
        <Text >Sign up</Text>
      </View>
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
