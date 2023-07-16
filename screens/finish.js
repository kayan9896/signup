import { View, Text,Image, Modal,Button } from 'react-native'
import React from 'react'
import Card from '../components/card'
import helper from '../components/helper'

export default function Finish({ld,resetfinish,don}) {
  //conditional rendering based on the boolean flag don
  if(don){
    return(
      <View style={helper.cardcontainer}>
      <Card>
        <Text>Thank you</Text>
        <Text>The image is based on your last digit {ld}</Text>
        <Image source={{uri:`https://picsum.photos/id/${ld}/100/100`,height:100, width:100}}/>
        <Button title={'start again'} onPress={()=>{resetfinish()}}/>
      </Card>
      </View>
    )
  }else{
  return (
    <View style={helper.cardcontainer}>
    <Card>
      <Text>Sorry to see you go</Text>
      <Image source={require("../unamused.png")} style={{height:100, width:100}}/>
      <Button title={'start again'} onPress={()=>{resetfinish()}}/>
    </Card>
    </View>
  )}
}