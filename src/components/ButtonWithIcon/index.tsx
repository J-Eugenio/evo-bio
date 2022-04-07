import React from 'react';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  ButtonTitle
} from './styles';

interface ButtonProps {
  iconName?: string,
  iconSize?: number,
  iconColor?: string,
  title?: string,
  titleColor?: string,
  btnColor?: string
}

export function ButtonWithIcon({
  iconColor = '#000000',
  iconName = 'logo-android',
  iconSize = 25,
  title = 'Default',
  titleColor = '#000000',
  btnColor = '#DDDDDD'
}: ButtonProps) {
  return (
    <Container color={btnColor} >
      <Text>
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      </Text>
      <ButtonTitle titleColor={titleColor}>
        {title}
      </ButtonTitle>
    </Container>
  )
}