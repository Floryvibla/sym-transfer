import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export function Profile() {
    const { title } = useSelector(state => state.others)
  return (
    <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
      <Text>Profile</Text>
    </View>
  )
}