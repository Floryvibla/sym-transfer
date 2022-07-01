import React from 'react'
import { useSelector } from 'react-redux'
import Activity from '../../components/Activity'
import { ButtonTransfer } from '../../components/Button'
import CardUser from '../../components/Card/CardUser'
import Header from '../../components/Header'
import Meta from '../../components/Meta'
import { Area } from './styles'

export function Home() {
    const { title } = useSelector(state => state.others)
  return (
    <Area>
      <Header />
      <CardUser />
      <Activity />
      <ButtonTransfer />
    </Area>
  )
}