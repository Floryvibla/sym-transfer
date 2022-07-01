import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export function Dashboard() {
    const { title } = useSelector(state => state.others)
  return (
    <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
      <Text>Dashboard</Text>
    </View>
  )
}