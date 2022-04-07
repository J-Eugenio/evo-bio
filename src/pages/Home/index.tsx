import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { ScreenProp } from '../../../App';
import { ContentButton } from '../../components/ContentButton';

import {
  Container,
  Main,
  MainScroll,
  Separator,
  ContentTileGroup,
  Title,
  ExtraGroup,
  Header,
  TitlePrimary,
  SubTitle,
} from './styles';
import { ButtonWithIcon } from '../../components/ButtonWithIcon';

const i = { uri: 'https://reactjs.org/logo-og.png' };

export function Home(){
  const navigation = useNavigation<ScreenProp>();
  const theme = useTheme()

  return (
    <Container>
      <Main>
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

        <ContentTileGroup>
          <Title>Conteúdos</Title>
          <Separator />
        </ContentTileGroup>

        <MainScroll
          horizontal
        >
          <ContentButton image={i} title="Teste" sub="sub-test"/>
          <ContentButton image={i} title="Teste" sub="sub-test"/>
        </MainScroll>

        <ContentTileGroup>
          <Title>Extra</Title>
          <Separator />
        </ContentTileGroup>

        <ExtraGroup>
          <ButtonWithIcon
            btnColor={theme.colors.primary_light}
            iconColor='#FFF'
            title='Dev. do APP'
            titleColor='#FFF'
          />
          <ButtonWithIcon
            btnColor={theme.colors.primary_light}
            iconColor='#FFF'
            title='Agradecimentos'
            titleColor='#FFF'
            iconName='heart-circle-outline'

          />
          <ButtonWithIcon
            btnColor={theme.colors.primary_light}
            iconColor='#FFF'
            title=''
            titleColor='#FFF'
            iconName='share-social-outline'
          />
        </ExtraGroup>
      </Main>
    </Container>
  )
}