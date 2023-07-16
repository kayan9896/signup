import { View, Text, Button, Modal } from 'react-native'
import React from 'react'

export default function Confirm({mail,phone,show,resetshow,finishpage,done}) {
  return (
    <Modal visible={show} transparent={true}>
      <View style={{ flex: 0.5,
      justifyContent: 'center',
      margin:30,
      //style for rounded corner and shadow
      borderRadius: 10,
      borderColor:'grey',
      backgroundColor:'grey',
      borderWidth:10, }}>
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