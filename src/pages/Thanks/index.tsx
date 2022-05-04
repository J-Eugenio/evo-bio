import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ReferenciaContainer,
  Title,
  Ref,
  Image
} from './styles';
import { ScreenProp } from '../../../App';
import { GoBackBtn } from '../../components/GoBackBtn';

import _09 from '../../assets/content/09.png';
import _08 from '../../assets/content/08.jpg';

import _15 from '../../assets/content/15.jpg';
import _07 from '../../assets/content/07.png';

import _84 from '../../assets/content/84.png';

export function Thanks(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <>
        <GoBackBtn />
        <ReferenciaContainer>
          <Title>Agradecimentoss</Title>

          <Ref>
          - A CAPES – "O presente trabalho foi realizado com apoio da Coordenação de 
          Aperfeiçoamento de Pessoal de Nível Superior – Brasil (CAPES) – Código de 
          Financiamento 001"
          </Ref>
          <Image source={_09}  resizeMode="contain" />

          <Ref>
          - Ao PROFBIO
          </Ref>
          <Image source={_08}  resizeMode="contain" />

          <Ref>
          - A UFMG
          </Ref>
          <Image source={_15}  resizeMode="contain" />

          <Ref>
          - A UERN
          </Ref>
          <Image source={_07}  resizeMode="contain" />

          <Ref>
          -Ao Centro de Educação de Jovens e Adultos Ana Vieira Pinheiro – Icó CE
          </Ref>
          <Image source={_84}  resizeMode="contain" />

        </ReferenciaContainer>
      </>
    </Container>
  )
}