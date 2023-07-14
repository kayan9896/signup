import { View, Text, Button, Modal } from 'react-native'
import React from 'react'

export default function Confirm({mail,phone,show,resetshow}) {
  return (
    <Modal style={{alignItems:'center'}} visible={show}>
      <Text>You have entered:{'\n'}
        {mail}{'\n'}
        {phone}{'\n'}
        Please confirm they are correct.
        </Text>
        
        <Button title="Go back" onPress={resetshow}/>
        <Button title="Confirm" />
        <Button title="Finish later" />
        
        
    </Modal>
  )
}