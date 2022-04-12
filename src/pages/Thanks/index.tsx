import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container
} from './styles';
import { ScreenProp } from '../../../App';


export function Thanks(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <Text>Thanks</Text>
    </Container>
  )
}