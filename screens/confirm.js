import { View, Text, Button, Modal } from 'react-native'
import React from 'react'

export default function Confirm({mail,phone,show,resetshow,finishpage,done}) {
  return (
    <Modal visible={show}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'grey' }}>
        <Text>You have entered:{'\n'}
          {mail}{'\n'}
          {phone}{'\n'}
          Please confirm they are correct.
        </Text>
        
        <Button title="Go back" onPress={resetshow}/>
        <Button title="Confirm" onPress={()=>{
          resetshow()
          finishpage()
          done(true)
          }}/>
        <Button title="Finish later" onPress={()=>{resetshow(),finishpage(),done(false)}}/>
        
      </View>
    </Modal>
  )
}