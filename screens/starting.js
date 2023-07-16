import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import Card from '../components/card'
import Input from '../components/input'
import helper from '../components/helper'

export default function Starting({store,confirmpage}) {
  //const to display email
  const [tm, setTm] = React.useState('')
  //const to display phone
  const [tp, setTp] = React.useState('')
  //warning message for phone
  const [w1, setW1] = React.useState('')
  //warning message for email
  const [w2, setW2] = React.useState('')
  const showm=(e)=>{setTm(e)}
  const showp=(e)=>{setTp(e)}
  //reset all the input
  const rst=()=>{
    setTm('')
    setTp('')
    setW1('')
    setW2('')
  }
  //a function to validate the input
  const valid=()=>{
    if(isNaN(tp) || tp.length!=10){
      setW1("please fill a valid phone")
    }else{setW1("")}
    //regex to check email
    if(!tm.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      setW2("please fill a valid email")
    }else{setW2("")}
    if((!isNaN(tp)&&tp.length===10)&&tm.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
      //store the input in parent component
      store(tm,tp)
      //navigate to confirm page
      confirmpage() 
    }
  }
  return (
    <View style={{flex:1}}>
      <View style={helper.titlecontainer}>
          <Text >Sign up</Text>
      </View>
      <View style={helper.cardcontainer}>
        <Card>
            <Input name={'email'} warning={w2} val={tm} show={showm}/>
            <Input name={'phone'} warning={w1} val={tp} show={showp}/>
            <View style={{flexDirection:'row'}}>
              <Button title="reset" onPress={rst}/>
              <View style={helper.space} />
              <Button title="signup" onPress={valid}/>
            </View>
        </Card>
      </View>
    </View>
  )
}