import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function Starting() {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'grey' }}>
        <Text>mail</Text>
        <TextInput  placeholder="mail" />

        <Text>phone</Text>
        <TextInput  placeholder="phone" />
        <Button title="reset" />
        <Button title="signup" />
    </View>
    
    
  )
}