import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import _05 from '../../assets/content/05.jpg';
import _06 from '../../assets/content/06.jpg';
import _11 from '../../assets/content/11.jpg';
import _21 from '../../assets/content/21.jpg';
import _25 from '../../assets/content/25.jpg';

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
          <ContentButton 
            image={_06} 
            title="Evolução biológica" 
            sub="O processo de modificação e adaptação das espécies."
            onPress={() => navigation.navigate("EvoBio")}
          />
          <ContentButton 
            image={_11} 
            title="Ideias evolucionistas" 
            sub="Cada espécie de ser vivo atual surgiu por transformações sucessivas de uma forma primitiva."
            onPress={() => navigation.navigate("IdeasEvo")}
          />
          <ContentButton 
            image={_25} 
            title="Evidências da evolução biológica" 
            sub="Evidências da evolução biologica."
            onPress={() => navigation.navigate("EviEvoBio")}
          />
          <ContentButton 
            image={_05} 
            title="Teoria moderna da evolução" 
            sub="A evolução podia ser explicada pelas mutações e recombinações gênicas, orientadas pela seleção natural."
            onPress={() => navigation.navigate("TeoModEvo")}
          />
          <ContentButton 
            image={_21} 
            title="QUIZ – Evolução biológica" 
            sub="Deriva gênica."
            onPress={() => console.log("AAAA")}
          />
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
            onPress={() => console.log("AAA")}
          />
          <ButtonWithIcon
            btnColor={theme.colors.primary_light}
            iconColor='#FFF'
            title='Agradecimentos'
            titleColor='#FFF'
            iconName='heart-circle-outline'
            onPress={() => console.log("AAA")}

          />
          <ButtonWithIcon
            btnColor={theme.colors.primary_light}
            iconColor='#FFF'
            title=''
            titleColor='#FFF'
            iconName='share-social-outline'
            onPress={() => console.log("AAA")}
          />
        </ExtraGroup>
      </Main>
    </Container>
  )
}