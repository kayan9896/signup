import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import Card from '../components/card'

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
    <View style={{flex:1}}>
    <View style={{alignItems:'center',marginHorizontal:150,borderWidth: 3}}>
        <Text >Sign up</Text>
      </View>
    <View style={{
      flex: 0.5,
      justifyContent: 'center',
      margin:30,
      //style for rounded corner and shadow
      borderRadius: 10,
      borderColor:'grey',
      borderWidth:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
      	height: 4,
      },
      shadowOpacity: 0.58,
      elevation: 14,
    }}>
    <Card>
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
    </Card>
    </View>
    </View>
  )
}