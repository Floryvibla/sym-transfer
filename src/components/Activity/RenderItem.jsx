import React from 'react'
import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { dataActivity } from '../../mocks';
import { primary, secondary } from "../../styles/constants/colors";
import Card from '../Card';
import Text from '../Text';


export default function RenderItem({item}) {

    const HandleStatus = () => {
        switch (item.status) {
            case "Envio pendente":
                return <AntDesign name="warning" size={16} color="#d84100" />
            case "Envio pausado":
                return <Entypo name="stopwatch" size={16} color="#d8a600" />
            case "Envio concluido":
                return <AntDesign name="check" size={16} color="#00d844" />
        
            default:
                return null;
        }
    }

    const handleStatusColor = () => {
        switch (item.status) {
            case "Envio pendente":
                return "#d84100"
            case "Envio pausado":
                return "#d8a600" 
            case "Envio concluido":
                return "#00d844"
        
            default:
                return null;
        }
    }

    const handleNameUser = () => {
        return `${item?.user.split(" ").slice(0, 1)} ${item?.user.split(" ").slice(0, 1)}`
    }
    
  return (
    <Area> 
        <LeftArea>
            <Card>
                {/* <Entypo name="dots-three-horizontal" size={16} color="black" /> */}
                {HandleStatus()}
            </Card>
            <TextArea>
                <Text size={14} title> {handleNameUser()} </Text>
                <Text color={handleStatusColor()} size={12}> {item?.status} </Text>
            </TextArea>
        </LeftArea>
        <TextArea>
            <Text size={14} title> {`${item?.mount} ${item.currency_send}`} </Text>
            <Text size={11}> {`${item?.mount} ${item.currency_receved}`} </Text>
        </TextArea>
    </Area>
  )

}

const Area = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: aliceblue; */
`
const LeftArea = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`
const TextArea = styled.View`
  /* flex: 1; */
  /* justify-content: center; */
  margin-left: 5px;
`
