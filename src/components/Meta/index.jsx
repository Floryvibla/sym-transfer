import React from 'react'
import { primary } from '../../styles/constants/colors'
import Text from '../Text'
import { Area, AreaText, Avatar, HeaderArea, Touchable } from './styles'

export default function Meta() {
  return (
    <Area>
      <AreaText>
        <Text  color={primary.blueDark}>Objetivo de hoje</Text>
        <Text size={20} color={primary.blueDark} title>Beba 4,200ml</Text>
      </AreaText>
    </Area>
  )
}