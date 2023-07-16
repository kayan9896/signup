import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Starting from '../screens/starting';
import Confirm from '../screens/confirm';
import Finish from '../screens/finish';

export default function Details() {
    //store the received email and phone
    const [m, setM] = React.useState('')
    const [p, setP] = React.useState('')
    //boolean flag to show/hide the confirm modal
    const [showup, setShowup] = React.useState(false)
    //boolean flag to show/hide the finish screen
    const [showfinish, setShowfinish] = React.useState(false)
    //boolean flag to decide the page in finish screen
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
    //conditional rendering based on the boolean flags showfinish
    if(showfinish){
      return(
        <Finish ld={p[p.length-1]} resetfinish={()=>{setShowfinish(false), setemail('','')}} don={don}></Finish>
    )}else{
    return (
      <View style={{flex:1}}>
        <Starting store={setemail} confirmpage={showconfirm}></Starting>
        <Confirm mail={m} phone={p} show={showup} resetshow={hide} finishpage={function(){setShowfinish(true)}} done={finished}></Confirm>
        
      </View>
    );}
}

const styles = StyleSheet.create({
    detailcontainer: {
      flex: 0.5,
      justifyContent: 'center',
      margin:30,
      //style for rounded corner and shadow
      borderRadius: 10,
      borderColor:'grey',
      borderWidth:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
      	height: 4,
      },
      shadowOpacity: 0.58,
      elevation: 14,
    },
  });