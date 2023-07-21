import { View, Text } from 'react-native'
import React, { Children } from 'react'
import helper from './helper'
export default function Card(p) {
  return (
    <View style={helper.cardin}>
        {p.children}
    </View>
  )
}