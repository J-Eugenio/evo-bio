import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import { ScreenProp } from '../../../../App';

import _16 from '../../../assets/content/16.jpg';
import _17 from '../../../assets/content/17.jpg';

import { content } from '../../../content';

import {
  Container,
  Header,
  TitlePrimary,
  SubTitle,
  Main,
  Image,
  MainText
} from './styles';
import { GoBackBtn } from '../../../components/GoBackBtn';


export function EvoBio(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <GoBackBtn />
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
        <Image source={_16} resizeMode="contain"/>
        <Image source={_17} resizeMode="contain"/>

        <MainText>
          {content._01}
        </MainText>
      </Main>
    </Container>
  )
}