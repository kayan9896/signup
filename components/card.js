import { View, Text } from 'react-native'
import React, { Children } from 'react'

export default function Card(p) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'grey' }}>
        {p.children}
    </View>
  )
}