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
    const finished=(a)=>{  setDon(a)  } 
    if(showfinish){
      return(
        <View style={styles.detailcontainer}>
        <Finish ld={p[p.length-1]} resetfinish={()=>{setShowfinish(false), setemail('','')}} don={don}></Finish>
        </View>
    )}else{
    return (
      <View style={styles.detailcontainer}>
        <Starting store={setemail} confirmpage={showconfirm}></Starting>
        <Confirm mail={m} phone={p} show={showup} resetshow={hide} finishpage={function(){setShowfinish(true)}} done={finished}></Confirm>
        
      </View>
    );}
}

const styles = StyleSheet.create({
    detailcontainer: {
      flex: 1,
      justifyContent: 'center',
    },
  });