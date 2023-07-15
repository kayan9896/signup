import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from './components/details';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text >Sign up</Text>
      </View>
      <Details></Details>
    </View>
  );
}
  


const styles = StyleSheet.create({
  container: {flex:1, paddingTop:30},
  titlecontainer: {alignItems:'center',marginHorizontal:150,borderWidth: 3}
});
