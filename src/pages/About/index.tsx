import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container
} from './styles';
import { ScreenProp } from '../../../App';


export function About(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <Text>About</Text>
    </Container>
  )
}