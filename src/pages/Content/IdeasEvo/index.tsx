import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import { ScreenProp } from '../../../../App';

import _26 from '../../../assets/content/26.jpg';
import _27 from '../../../assets/content/27.jpg';

import _12 from '../../../assets/content/12.jpg';
import _28 from '../../../assets/content/28.jpg';
import _60 from '../../../assets/content/60.jpg';
import _29 from '../../../assets/content/29.png';

import { content } from '../../../content';

import {
  Container,
  Header,
  TitlePrimary,
  SubTitle,
  Main,
  Image,
  MainText,
  MainTitle,
  B
} from './styles';


export function IdeasEvo(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <Header>
        <TitlePrimary>
          IDEIAS EVOLUCIONISTAS
          <FontAwesome5 name='walking' size={25} color='#00ff37d1' />
        </TitlePrimary>
        <SubTitle>
          Cada espécie de ser vivo atual surgiu por transformações sucessivas de uma forma primitiva.
          <FontAwesome5 name='walking' size={15} color='#7ee695d1' />
        </SubTitle>
      </Header>

      <Main>
        <MainTitle>• Lamarckismo</MainTitle>

        <Image source={_26} resizeMode="contain"/>
        <Image source={_27} resizeMode="contain"/>

        <MainText>
          {content._02.Lamarckismo}
        </MainText>

        <MainTitle>• Darwinismo</MainTitle>

        <Image source={_12} resizeMode="contain"/>
        <Image source={_28} resizeMode="contain"/>
        <Image source={_60} resizeMode="contain"/>

        <MainText>
          {content._02.Darwinismo.content}
        </MainText>

        <MainText>
          <B>• Fato 1.</B>{content._02.Darwinismo.fato01}
        </MainText>

        <MainText>
          <B>• Fato 2.</B>{content._02.Darwinismo.fato02}
        </MainText>

        <MainText>
          <B>• Fato 3.</B>{content._02.Darwinismo.fato03}
        </MainText>

        <MainText>
          <B>• Fato 4.</B>{content._02.Darwinismo.fato04}
        </MainText>

        <Image source={_29} resizeMode="contain"/>

      </Main>
    </Container>
  )
}