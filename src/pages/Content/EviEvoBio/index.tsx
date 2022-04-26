import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import { ScreenProp } from '../../../../App';

import _49 from '../../../assets/content/49.jpg';

import _25 from '../../../assets/content/25.jpg';
import _31 from '../../../assets/content/31.jpg';
import _33 from '../../../assets/content/33.gif';

import _34 from '../../../assets/content/34.jpg';
import _35 from '../../../assets/content/35.jpg';

import _40 from '../../../assets/content/40.jpg';
import _39 from '../../../assets/content/39.png';
import _38 from '../../../assets/content/38.jpg';
import _37 from '../../../assets/content/37.png';

import _43 from '../../../assets/content/43.jpg';
import _44 from '../../../assets/content/44.jpg';
import _04 from '../../../assets/content/04.jpg';

import _41 from '../../../assets/content/41.jpg';
import _42 from '../../../assets/content/42.gif';
import _45 from '../../../assets/content/45.jpg';
import _46 from '../../../assets/content/46.jpg';
import _47 from '../../../assets/content/47.png';

import _48 from '../../../assets/content/48.jpg';
import _50 from '../../../assets/content/50.jpg';

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


export function EviEvoBio(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <Header>
        <TitlePrimary>
          EVIDÊNCIAS DA EVOLUÇÃO BIOLÓGICA
          <FontAwesome5 name='prescription-bottle' size={25} color='#00ff37d1' />
        </TitlePrimary>
        <SubTitle>
          Evidências da evolução biologica.
          <FontAwesome5 name='prescription-bottle' size={15} color='#7ee695d1' />
        </SubTitle>
      </Header>

      <Main>

        <Image source={_49} resizeMode="contain"/>

        <MainText>
          {content._03.content}
        </MainText>

        <MainTitle>• Registro fóssil</MainTitle>

        <Image source={_25} resizeMode="contain"/>
        <Image source={_31}  resizeMode="contain" />
        
        <MainText>
          {content._03.registro_fossil}
        </MainText>

        <Image source={_33}  resizeMode="contain" />

        <MainTitle>• Adaptação</MainTitle>

        <Image source={_34}  resizeMode="contain" />
        <Image source={_35}  resizeMode="contain" />

        <MainText>
          {content._03.adaptacao}
        </MainText>

        <MainTitle>• Semelhança entre as espécies</MainTitle>

        <MainText>
          {content._03.semelhanca}
        </MainText>

        <MainTitle>• Órgãos homólogos</MainTitle>

        <Image source={_40}  resizeMode="contain" />
        <Image source={_39}  style={{ backgroundColor: '#DDD'}} resizeMode="contain" />
        <Image source={_38}  resizeMode="contain" />
        <Image source={_37}  resizeMode="contain" />

        <MainText>
          {content._03.homologos}
        </MainText>

        <MainTitle>• Órgãos análogos</MainTitle>

        <Image source={_43}  resizeMode="contain" />
        <Image source={_44}  resizeMode="contain" />
        <Image source={_04}  resizeMode="contain" />

        <MainText>
          {content._03.analogos}
        </MainText>

        <MainTitle>• Semelhanças embriológicas</MainTitle>

        <Image source={_41}  resizeMode="contain" />
        <Image source={_42}  resizeMode="contain" />
        <Image source={_45}  resizeMode="contain" />
        <Image source={_46}  resizeMode="contain" />
        <Image source={_47}  resizeMode="contain" />

        <MainText>
          {content._03.embriologicas}
        </MainText>

        <MainTitle>• Semelhanças moleculares</MainTitle>

        <Image source={_48}  resizeMode="contain" />
        <Image source={_50}  resizeMode="contain" />

        <MainText>
          {content._03.moleculares}
        </MainText>
      </Main>
    </Container>
  )
}