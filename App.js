import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from './components/details';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#ffffff', '#3b5998', '#192f6a']}
        style={{flex:1}}>
      <View style={styles.titlecontainer}>
        <Text >Sign up</Text>
      </View>
      <Details></Details>
      </LinearGradient>
    </View>
  );
}
  


const styles = StyleSheet.create({
  container: {flex:1, paddingTop:30},
  titlecontainer: {alignItems:'center',marginHorizontal:150,borderWidth: 3}
});
