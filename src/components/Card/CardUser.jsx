import React from 'react'
import { StyleSheet } from 'react-native';
import styled from "styled-components/native";
import Card from '.';
import { primary, secondary } from "../../styles/constants/colors";
import Text from '../Text';

export default function CardUser({children, color, radius, height, width, ex}) {
  return (
    <Area> 
        <Avatar source={{uri: "https://api.lorem.space/image/face?hash=88560"}}/>
        <Container>
            <Text size={18} title>
                Flory Muenge Tshiteya
            </Text>
            <Text size={12}>
                Agência 0001 / Conta 85367562-4
            </Text>
        </Container> 
    </Area>
  )

}

const Area = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  align-items: center;
  justify-content: flex-end;
  /* background-color: #fff; */
  position: relative;
  /* padding: 10px; */
`
const Container = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${primary.light};
`
const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 7px;
    position: absolute;
    top: 0px;
    z-index: 10;
`
