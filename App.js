import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from './components/details';
import { LinearGradient } from 'expo-linear-gradient';
import helper, { colour } from './components/helper';

export default function App() {
  
  return (
    <View style={helper.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[colour.white, colour.lightblue, colour.darkblur]}
        style={{flex:1}}>
      
      <Details></Details>
      </LinearGradient>
    </View>
  );
}

