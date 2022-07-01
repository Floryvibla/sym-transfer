// import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { primary } from "../../styles/constants/colors";

// const width = Dimensions.get(window).width
// const height = Dimensions.get(window).height

export const Area = styled.View`
    width: 100%;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
`
export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`
export const AreaText = styled.View`
    padding: 0px 10px;
    justify-content: center;
`