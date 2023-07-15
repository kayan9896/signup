import { View, Text,Image, Modal,Button } from 'react-native'
import React from 'react'

export default function Finish({ld,resetfinish,don}) {
  if(don){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'grey' }}>
        <Text>Thank you</Text>
        <Text>The image is based on your last digit {ld}</Text>
        <Image source={{uri:`https://picsum.photos/id/${ld}/100/100`,height:100, width:100}}/>
        <Button title={'start again'} onPress={()=>{resetfinish()}}/>
      </View>
    )
  }else{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'grey' }}>
      <Text>Sorry to see you go</Text>
      <Image source={require("../unamused.png")} style={{height:100, width:100}}/>
      <Button title={'start again'} onPress={()=>{resetfinish()}}/>
    </View>
  )}
}