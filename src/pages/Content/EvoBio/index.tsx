import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import { ScreenProp } from '../../../../App';

import _01 from '../../../assets/content/01.jpg';

import {
  Container,
  Header,
  TitlePrimary,
  SubTitle,
  Main,
  Image
} from './styles';


export function EvoBio(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <Header>
        <TitlePrimary>
          EVOLUÇÃO BIOLÓGICA
          <FontAwesome5 name='seedling' size={25} color='#00ff37d1' />
        </TitlePrimary>
        <SubTitle>
          Um processo de modificação e adaptação das
          espécies ao longo do tempo.
          <FontAwesome5 name='dna' size={15} color='#7ee695d1' />
        </SubTitle>
      </Header>

      <Main>
        <Image source={_01}/>
      </Main>
    </Container>
  )
}