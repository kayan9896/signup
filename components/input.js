import { View, Text,TextInput } from 'react-native'
import React from 'react'

export default function Input({name,warning,val,show}) {
  return (
    <View >
        <Text>{name}</Text>
        <TextInput style={{borderBottomWidth:1}} placeholder="email                               " value={val} onChangeText={show}/>
        <Text>{warning}</Text>
    </View>
  )
}