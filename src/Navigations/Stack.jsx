import React from 'react'
import { Dashboard, Home, Profile } from '../Screens'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { primary } from '../styles/constants/colors';
import { createStackNavigator } from '@react-navigation/stack';

export default function StackNavigation() {
  const Tab =  createStackNavigator()
  const width= 80
  const left= `${(100 - width) / 2}%`

  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name='Transfer'
        component={Dashboard}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  )
}