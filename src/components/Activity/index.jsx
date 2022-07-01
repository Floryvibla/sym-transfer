import React from 'react'
import styled from "styled-components/native";
import { dataActivity } from '../../mocks';
import { primary, secondary } from "../../styles/constants/colors";
import Text from '../Text';
import RenderItem from './RenderItem';


export default function Activity({}) {
  return (
    <Area> 
        <Text size={20} title> Todas as atividades </Text>
        {dataActivity.length > 0 ? (
            <ListArea
              showsVerticalScrollIndicator={false}
              data={dataActivity.sort((a, b) => b.id - a.id)}
              renderItem={RenderItem}
              keyExtractor={item => item.id}
              onEndReachedThreshold={0.1}
            />
          ) : (
            <Container>
              <Text title> Ainda não existe nada! </Text>
            </Container>
          )
          
        }
    </Area>
  )

}

const Area = styled.View`
  width: 100%;
  /* height: 100%; */
  /* flex: 1; */
  margin-top: 30px;
`
const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 50%;
`
const ListArea = styled.FlatList`
  width: 100%;
  height: 50%;
  margin-top: 10px;
  
`
