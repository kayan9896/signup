import { View, Text,Image, Modal,Button } from 'react-native'
import React from 'react'
import Card from '../components/card'

export default function Finish({ld,resetfinish,don}) {
  //conditional rendering based on the boolean flags don
  if(don){
    return(
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
        <Text>Thank you</Text>
        <Text>The image is based on your last digit {ld}</Text>
        <Image source={{uri:`https://picsum.photos/id/${ld}/100/100`,height:100, width:100}}/>
        <Button title={'start again'} onPress={()=>{resetfinish()}}/>
      </Card>
      </View>
    )
  }else{
  return (
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
      <Text>Sorry to see you go</Text>
      <Image source={require("../unamused.png")} style={{height:100, width:100}}/>
      <Button title={'start again'} onPress={()=>{resetfinish()}}/>
    </Card>
    </View>
  )}
}