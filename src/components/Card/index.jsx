import React from 'react'
import { StyleSheet } from 'react-native';
import styled from "styled-components/native";
import { primary, secondary } from "../../styles/constants/colors";

export default function Card({children, color, radius, height, width, ex}) {
  return (
    <TouchableCard
      style={styles.container}
      width={width}
      color={color}
      height={height}
      radius={radius}
    > 
      {children} 
    </TouchableCard>
  )

}

const styles = StyleSheet.create({
  container: {
    shadowColor: secondary.light,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.19,
    shadowRadius: 8.30,

    elevation: 13,
  }
})

export const TouchableCard = styled.TouchableOpacity`
  width: ${({width}) => width ?? 40}px;
  height: ${({height}) => height ?? 40}px;
  border-radius: ${({radius}) => radius ?? 8}px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  /* padding: 10px; */
`