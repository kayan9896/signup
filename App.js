import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Starting from './screens/starting';
import Confirm from './screens/confirm';
import Finish from './screens/finish';

export default function App() {
  const [m, setM] = React.useState('')
  const [p, setP] = React.useState('')
  const [showup, setShowup] = React.useState(false)
  const sc=1;
  const setemail=(a,b)=>{
    setM(a)
    setP(b)
  }
  function showconfirm(){
    setShowup(true)
  }
  function hide(){ setShowup(false)} 
  if(sc===1){
  return (
    <View style={{flex:1, justifyContent:'center',paddingTop:10}}>
      <Text style={{justifyContent:'space-evenly'}}>Sign up</Text>
      <Starting store={setemail} confirmpage={showconfirm}></Starting>
      <Confirm mail={m} phone={p} show={showup} resetshow={hide}></Confirm>
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
