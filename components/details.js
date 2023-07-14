import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Starting from '../screens/starting';
import Confirm from '../screens/confirm';
import Finish from '../screens/finish';

export default function Details() {
    const [m, setM] = React.useState('')
    const [p, setP] = React.useState('')
    const [showup, setShowup] = React.useState(false)
    const [showfinish, setShowfinish] = React.useState(false)
    const [don, setDon] = React.useState(true)
    const setemail=(a,b)=>{
      setM(a)
      setP(b)
    }
    function showconfirm(){
      setShowup(true)
    }
    function hide(){ setShowup(false)} 
    const finished=(a)=>{  setDon(a),console.log(a);  } 
    if(showfinish){
      return(
        <View style={{flex:1, justifyContent:'center',paddingTop:10}}>
        <Finish ld={p[p.length-1]} resetfinish={()=>{setShowfinish(false), setemail('','')}} don={don}></Finish>
        </View>
    )}else{
    return (
      <View style={{flex:1, justifyContent:'center',paddingTop:10}}>
        <Starting store={setemail} confirmpage={showconfirm}></Starting>
        <Confirm mail={m} phone={p} show={showup} resetshow={hide} finishpage={function(){setShowfinish(true)}} done={finished}></Confirm>
        
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