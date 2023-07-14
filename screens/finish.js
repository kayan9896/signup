import { View, Text,Image, Modal } from 'react-native'
import React from 'react'

export default function Finish({ld,showfn,resetfinish}) {
  const don=1
  if(don===1){
    return(
    <Modal visible={showfn}>
      <Text>Thank you</Text>
      <Text>your id is {ld}</Text>
      <Image source={{url:`https://picsum.photos/id/${ld}/100/100`}} style={{height:100, width:100}}/>
    </Modal>
    )
  }else{
  return (
    <View>
      <Text>Sorry</Text>
    </View>
  )}
}