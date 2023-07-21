import { View, Text, Button, Modal } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import helper, { colour } from '../components/helper';

export default function Confirm({mail,phone,show,resetshow,finishpage,done}) {
  return (
    <Modal visible={show} transparent={true}>
      <LinearGradient
        // Background Linear Gradient
        colors={[colour.white, colour.lightblue, colour.darkblur]}
        style={{flex:1}}>
      <View style={{...helper.cardcontainer,...{backgroundColor:'grey'}}}>
        <Text>You have entered:{'\n'}
          {mail}{'\n'}
          {phone}{'\n'}
          Please confirm they are correct.
        </Text>
        <View style={helper.space} />
        <Button title="Go back" onPress={resetshow}/>
        <View style={helper.space} />
        <Button title="Confirm" onPress={()=>{
          resetshow()
          finishpage()
          done(true)
          }}/>
        <View style={helper.space} />
        <Button title="Finish later" onPress={()=>{resetshow(),finishpage(),done(false)}}/>
        
      </View>
      </LinearGradient>
      
    </Modal>
  )
}