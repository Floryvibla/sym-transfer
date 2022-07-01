import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styled from "styled-components/native";
import { primary, secondary } from "../../styles/constants/colors";
import Text from '../Text';

const { width } = Dimensions.get("window")

export function ButtonTransfer({}) {
  return (
    <Area style={styles.container}> 
        <Text mb={0} size={16} color={"#fff"} >
            Nova transferência <FontAwesome5 name="exchange-alt"  />
        </Text>
    </Area>
  )

}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.19,
    shadowRadius: 8.30,

    elevation: 13,
  }
})

const Area = styled.TouchableOpacity`
  width: ${width / 1.5}px;
  height: 60px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${primary.default};
  position: absolute;
  bottom: 20px;
  /* padding: 10px; */
`
