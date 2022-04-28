import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import { ScreenProp } from '../../../../App';

import _57 from '../../../assets/content/57.jpg';

import _64 from '../../../assets/content/64.png';
import _68 from '../../../assets/content/68.jpg';

import _51 from '../../../assets/content/51.jpg';
import _52 from '../../../assets/content/52.jpg';

import _85 from '../../../assets/content/85.jpg';
import _86 from '../../../assets/content/86.png';
import _54 from '../../../assets/content/54.png';
import _53 from '../../../assets/content/53.png';
import _55 from '../../../assets/content/55.jpg';

import _63 from '../../../assets/content/63.jpg';
import _62 from '../../../assets/content/62.jpg';
import _58 from '../../../assets/content/58.jpg';
import _59 from '../../../assets/content/59.png';

import _72 from '../../../assets/content/72.jpg';
import _71 from '../../../assets/content/71.jpg';

import _73 from '../../../assets/content/73.png';

import _67 from '../../../assets/content/67.jpg';
import _77 from '../../../assets/content/77.png';
import _69 from '../../../assets/content/69.png';
import _82 from '../../../assets/content/82.png';
import _76 from '../../../assets/content/76.png';
import _02 from '../../../assets/content/02.png';
import _01 from '../../../assets/content/01.jpg';
import _83 from '../../../assets/content/83.jpg';

import _80 from '../../../assets/content/80.png';
import _81 from '../../../assets/content/81.jpg';

import _78 from '../../../assets/content/78.png';

import _75 from '../../../assets/content/75.jpg';

import _79 from '../../../assets/content/79.jpg';



import { content } from '../../../content';

import {
  Container,
  Header,
  TitlePrimary,
  SubTitle,
  Main,
  Image,
  MainText,
  MainTitle
} from './styles';


export function TeoModEvo(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <Header>
        <TitlePrimary>
          TEORIA MODERNA DA EVOLUÇÃO  
          <FontAwesome5 name='lightbulb' size={25} color='#00ff37d1' />
        </TitlePrimary>
        <SubTitle>
          A evolução podia ser explicada pelas mutações e recombinações gênicas, orientadas pela seleção natural.
          <FontAwesome5 name='lightbulb' size={15} color='#7ee695d1' />
        </SubTitle>
      </Header>

      <Main>
        <Image source={_57} resizeMode="contain"/>

        <MainTitle>• Fatores evolutivos</MainTitle>
        <Image source={_64} resizeMode="contain"/>
        <Image source={_68} resizeMode="contain"/>
        <MainText>
          {content._04.fatores_evolutivos}
        </MainText>

        <MainTitle>• Mutação gênica</MainTitle>
        <Image source={_51} resizeMode="contain"/>
        <Image source={_52} resizeMode="contain"/>
        <MainText>
          {content._04.mutacao_genica}
        </MainText>

        <MainTitle>• Recombinação gênica</MainTitle>
        <Image source={_85} resizeMode="contain"/>
        <Image source={_86} resizeMode="contain"/>
        <Image source={_54} resizeMode="contain"/>
        <Image source={_53} resizeMode="contain"/>
        <Image source={_55} resizeMode="contain"/>
        <MainText>
          {content._04.recombinacao_genice}
        </MainText>

        <MainTitle>• Seleção natural e adaptação</MainTitle>
        <Image source={_63} resizeMode="contain"/>
        <Image source={_62} resizeMode="contain"/>
        <Image source={_58} resizeMode="contain"/>
        <Image source={_59} resizeMode="contain"/>
        <MainText>
          {content._04.selecao_natural}
        </MainText>

        <MainTitle>• Bases genéticas da evolução</MainTitle>
        <Image source={_72} resizeMode="contain"/>
        <MainText>
          {content._04.bases_geneticas}
        </MainText>

        <MainTitle>• Fatores evolutivos e equilíbrio gênico</MainTitle>
        <MainText>
          {content._04.fatores_evolutivos_e_equilíbrio}
        </MainText>

        <MainTitle>• Mutação e seleção natural</MainTitle>
        <Image source={_71} resizeMode="contain"/>
        <MainText>
          {content._04.mutacao_e_selecao}
        </MainText>

        <MainTitle>• Migração</MainTitle>
        <Image source={_73} resizeMode="contain"/>
        <MainText>
          {content._04.migracao}
        </MainText>

        <MainTitle>• Deriva gênica.</MainTitle>
        <Image source={_67} resizeMode="contain"/>
        <Image source={_77} style={{ backgroundColor: '#DDD', height: 550}} resizeMode="contain"/>
        <Image source={_69} style={{ backgroundColor: '#DDD'}} resizeMode="contain"/>
        <MainText>
          {content._04.deriva_genica.content_1}
        </MainText>
        <Image source={_82} style={{ backgroundColor: '#DDD'}} resizeMode="contain"/>
        <MainText>
          {content._04.deriva_genica.content_2}
        </MainText>
        <Image source={_82} style={{ backgroundColor: '#DDD'}} resizeMode="contain"/>
        <Image source={_76} style={{ backgroundColor: '#DDD'}} resizeMode="contain"/>
        <MainText>
          {content._04.deriva_genica.content_3}
        </MainText>
        <Image source={_83} style={{ backgroundColor: '#DDD'}} resizeMode="contain"/>
        <Image source={_02} style={{ backgroundColor: '#DDD'}} resizeMode="contain"/>
        <MainText>
          {content._04.deriva_genica.content_4}
        </MainText>
        <Image source={_01} style={{ backgroundColor: '#DDD'}} resizeMode="contain"/>

        <MainTitle>• Exemplo de efeito fundador na espécie humana.</MainTitle>
        <Image source={_80} style={{ backgroundColor: '#DDD'}} resizeMode="contain"/>
        <Image source={_81} resizeMode="contain"/>
        <MainText>
          {content._04.fundador.content_1}
        </MainText>
        <Image source={_78} resizeMode="contain"/>
        <MainText>
          {content._04.fundador.content_2}
        </MainText>

        <MainTitle>• Exemplo de Efeito Gargalo.</MainTitle>
        <Image source={_75} resizeMode="contain"/>
        <MainText>
          {content._04.gargalo}
        </MainText>

        <MainTitle>• A Deriva Genética e a Seleção Natural.</MainTitle>
        <Image source={_79} resizeMode="contain" style={{ height: 550}}/>
        <MainText>
          {content._04.genetica_natural}
        </MainText>

      </Main>
    </Container>
  )
}