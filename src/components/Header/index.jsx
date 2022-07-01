import React from 'react'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Card from '../Card'
import Text from '../Text'
import { Area, AreaText, Avatar } from './styles'

export default function Header() {
  return (
    <Area>
        <Card>
          <Ionicons name="ios-qr-code-outline" size={16} color="black" />
        </Card>
        <Card>
          <Entypo name="dots-three-horizontal" size={16} color="black" />
        </Card>
    </Area>
  )
}