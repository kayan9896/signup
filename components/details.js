import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Starting from '../screens/starting';
import Confirm from '../screens/confirm';
import Finish from '../screens/finish';

export default function Details() {
    const [m, setM] = React.useState('')
    const [p, setP] = React.useState('')
    const [showup, setShowup] = React.useState(false)
    const [showfinish, setShowfinish] = React.useState(false)
    const [don, setDon] = React.useState(0)
    const setemail=(a,b)=>{
      setM(a)
      setP(b)
    }
    function showconfirm(){
      setShowup(true)
    }
    function hide(){ setShowup(false)} 
    const screen=0
    if(showfinish){
      return(<Finish ld={p[p.length-1]} showfn={showfinish} resetfinish={()=>{setShowfinish('false')}}></Finish>)
    }else{
    return (
      <View style={{flex:1, justifyContent:'center',paddingTop:10}}>
        <Starting store={setemail} confirmpage={showconfirm}></Starting>
        <Confirm mail={m} phone={p} show={showup} resetshow={hide} finishpage={function(){setShowfinish(true)}} done={function(){setDon(1)}}></Confirm>
        
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