import { View, Text } from 'react-native'
import React from 'react'

export default function Finish({ld}) {
  const don=1
  if(don===1){
    return(
      <View>
      <Text>Thank you</Text>
      <Text>your id is {ld}</Text>
    </View>
    )
  }else{
  return (
    <View>
      <Text>Sorry</Text>
    </View>
  )}
}