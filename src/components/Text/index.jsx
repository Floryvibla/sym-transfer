import React from 'react'
import styled from "styled-components/native";
import { primary, secondary } from "../../styles/constants/colors";

export default function Text({children, color, font, size, title, mb}) {
  return (
    <Title
        title={title}
        color={color}
        size={size}
        font={font}
        mb={mb}
    > 
        {children} 
    </Title>
  )
}

const Title = styled.Text`
    font-size: ${({title, size}) => title ? size ? `${size}px` : "16px" : size ? `${size}px` : "14px"};
    color: ${({title, color}) => title ? color ? `${color}` : "#000" : color ? `${color}` : secondary.default};
    font-family: ${({title, font}) => title ? "Inter_600SemiBold" : "Inter_400Regular" };
    margin-top: ${({mb}) => mb ?? 0}px;
`