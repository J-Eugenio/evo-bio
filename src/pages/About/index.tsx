import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ReferenciaContainer,
  Title,
  Ref,
  RefBold,
  RefButton,
  RefButtonText,
} from './styles';
import { ScreenProp } from '../../../App';
import { Linking } from 'react-native';
import { GoBackBtn } from '../../components/GoBackBtn';


export function About(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <>
        <GoBackBtn />

        <ReferenciaContainer>
          <Title>Saiba Mais</Title>

          <RefBold>– EVOLUÇÃO BIOLOGICA – CONCEITOS BÁSICOS</RefBold>
          <RefButton onPress={() => Linking.openURL('https://www.youtube.com/watch?v=QtmELMQ2Ru8')}><RefButtonText>https://www.youtube.com/watch?v=QtmELMQ2Ru8</RefButtonText></RefButton>

          <RefBold>- EVIDÊNCIAS EVOLUTIVAS - FÓSSEIS E ÓRGÃOS VESTIGIAIS</RefBold>
          <RefButton onPress={() => Linking.openURL('https://www.youtube.com/watch?v=tShgMaX2W1U')}><RefButtonText>https://www.youtube.com/watch?v=tShgMaX2W1U</RefButtonText></RefButton>

          <RefBold>- EVIDÊNCIAS EVOLUTIVAS - ÓRGÃOS HOMÓLOGOS E ANÁLOGOS</RefBold>
          <RefButton onPress={() => Linking.openURL('https://www.youtube.com/watch?v=LPvWuEbYkPc')}><RefButtonText>https://www.youtube.com/watch?v=LPvWuEbYkPc</RefButtonText></RefButton>

          <RefBold>- TEORIA DE LAMARCK | LAMARCKISMO | EVOLUÇÃO</RefBold>
          <RefButton onPress={() => Linking.openURL('https://www.youtube.com/watch?v=QtHHQNeYU10')}><RefButtonText>https://www.youtube.com/watch?v=QtHHQNeYU10</RefButtonText></RefButton>

          <RefBold>- SELEÇÃO NATURAL - DARWINISMO - NEODARWINISMO</RefBold>
          <RefButton onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4iP6cazPLII')}><RefButtonText>https://www.youtube.com/watch?v=4iP6cazPLII</RefButtonText></RefButton>

          <RefBold>- ESPECIAÇÃO</RefBold>
          <RefButton onPress={() => Linking.openURL('https://www.youtube.com/watch?v=65SFaupYB1I')}><RefButtonText>https://www.youtube.com/watch?v=65SFaupYB1I</RefButtonText></RefButton>

          <RefBold>- DERIVA GENÉTICA</RefBold>
          <RefButton onPress={() => Linking.openURL('https://www.youtube.com/watch?v=O2e7wHVkEcE')}><RefButtonText>https://www.youtube.com/watch?v=O2e7wHVkEcE</RefButtonText></RefButton>

        </ReferenciaContainer>
      </>
    </Container>
  )
}