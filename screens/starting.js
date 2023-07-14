import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function Starting({store,confirmpage}) {
  const [tm, setTm] = React.useState('')
  const [tp, setTp] = React.useState('')
  const [w1, setW1] = React.useState('')
  const [w2, setW2] = React.useState('')
  const showm=(e)=>{setTm(e)}
  const showp=(e)=>{setTp(e)}
  const rst=()=>{
    setTm('')
    setTp('')
    setW1('')
    setW2('')
  }
  const valid=()=>{
    if(isNaN(tp) || tp.length!=10)
    {
      setW1("please fill phone")
    }
    if(!tm.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
      setW2("please fill mail")
    }
    if((!isNaN(tp)&&tp.length===10)&&tm.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
      store(tm,tp)
      confirmpage() 
    }
  }
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'grey' }}>
        <Text>mail</Text>
        <TextInput  placeholder="mail" value={tm} onChangeText={showm}/>
        <Text>{w2}</Text>
        <Text>phone</Text>
        <TextInput  placeholder="phone" value={tp} onChangeText={showp}/>
        <Text>{w1}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <Button title="reset" onPress={rst}/>
          <Button title="signup" onPress={valid}/>
        </View>
    </View>
    
    
  )
}