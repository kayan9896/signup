import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Finish({ld}) {
  const don=1
  if(don===1){
    return(
      <View>
      <Text>Thank you</Text>
      <Text>your id is {ld}</Text>
      <Image source={{url:`https://picsum.photos/id/${ld}/100/100`}} style={{height:100, width:100}}/>
    </View>
    )
  }else{
  return (
    <View>
      <Text>Sorry</Text>
    </View>
  )}
}