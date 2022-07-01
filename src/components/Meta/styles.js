// import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { primary } from "../../styles/constants/colors";

// const width = Dimensions.get(window).width
// const height = Dimensions.get(window).height

export const Area = styled.View`
    /* padding: 20px; */
    align-items: center;
    /* background-color: aliceblue; */
`
export const HeaderArea = styled.View`
    align-items: center;
    justify-content: center;
`
export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`
export const Touchable = styled.TouchableOpacity`

`
export const AreaText = styled.View`
    padding: 0px 10px;
    align-items: center;
`
export const Text = styled.Text`
    font-size: ${({title, size}) => title ? size ? `${size}px` : "16px" : size ? `${size}px` : "14px"};
color: ${({title, color}) => title ? color ? `${color}` : primary.dark : color ? `${color}` : primary.gray};
    font-weight: ${({title}) => title ? "700" : "400"};
`