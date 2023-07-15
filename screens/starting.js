import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function Starting({store,confirmpage}) {
  //const to display email, phone and warning
  const [tm, setTm] = React.useState('')
  const [tp, setTp] = React.useState('')
  const [w1, setW1] = React.useState('')
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
      store(tm,tp)
      confirmpage() 
    }
  }
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'grey' }}>
        <Text>email</Text>
        <TextInput style={{borderBottomWidth:1}} placeholder="email                               " value={tm} onChangeText={showm}/>
        <Text>{w2}</Text>
        <Text>phone</Text>
        <TextInput style={{borderBottomWidth:1}} placeholder="phone                               " value={tp} onChangeText={showp}/>
        <Text>{w1}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Button title="reset" onPress={rst}/>
          <Button title="signup" onPress={valid}/>
        </View>
    </View>
  )
}