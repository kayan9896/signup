import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Confirm({mail,phone}) {
  return (
    <View style={{alignItems:'center'}}>
      <Text>You have entered:{'\n'}
        {mail}{'\n'}
        {phone}{'\n'}
        Please confirm they are correct.
        </Text>
        
        <Button title="Go back" />
        <Button title="Confirm" />
        <Button title="Finish later" />
        
        
    </View>
  )
}