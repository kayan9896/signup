import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Starting from './screens/starting';
import Confirm from './screens/confirm';
import Finish from './screens/finish';
export default function App() {
  const [m, setM] = React.useState('')
  const [p, setP] = React.useState('')
  const sc=1;
  const changesc=(a,b)=>{
    setM(a)
    setP(b)
    console.log(m,p);
  }
  if(sc===1){
  return (
    <View style={{flex:1, justifyContent:'center',paddingTop:10}}>
      <Text style={{justifyContent:'space-evenly'}}>Sign up</Text>
      <Starting stsc={changesc}></Starting>
    </View>
  );}
  else if(sc===2) {
    return (
      <View style={{flex:1, justifyContent:'center',paddingTop:10}}>
        <Text style={{justifyContent:'space-evenly'}}>Sign up</Text>
        <Confirm mail={m} phone={p}></Confirm>
      </View>
    );}
  else{return (
    <View style={{flex:1, justifyContent:'center',paddingTop:10}}>
      <Text style={{justifyContent:'space-evenly'}}>Sign up</Text>
      <Finish ld={p[p.length-1]}></Finish>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
