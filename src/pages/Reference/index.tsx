import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ReferenciaContainer,
  Title,
  Ref,
  RefBold,
  RefButton,
  RefButtonText,
  GoBackButton,
} from './styles';
import { ScreenProp } from '../../../App';
import { Linking } from 'react-native';
import { GoBackBtn } from '../../components/GoBackBtn';


export function Reference(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <>
        <GoBackBtn />

        <ReferenciaContainer>
          <Title>Referências Bibliográficas</Title>

          <Ref>
            AMABIS, José Mariano; MARTHO, Gilberto Rodrigues. Biologia. 3 edição-São Paulo.  <RefBold>Moderna</RefBold>, 2010.
          </Ref>

          <Ref>
            REECE, Jane B. et al. <RefBold>Biologia de Campbell.</RefBold> Artmed Editora, 2020.
          </Ref>

          <Ref>
            COYNE, J. A. <RefBold>A evidência da evolução</RefBold>: porque é que Darwin tinha razão. [S. l.]: Ed tinta-da-china, 2012.
          </Ref>

          <Ref>
            MEYER, D.; EL-HANI, C. N.<RefBold>Evolução</RefBold>: o sentido da biologia. São Paulo: UNESP, 2005. 
          </Ref>
          <RefButton onPress={() => Linking.openURL('https://www.todamateria.com.br/o-que-e-evolucao/')}><RefButtonText>https://www.todamateria.com.br/o-que-e-evolucao/</RefButtonText></RefButton>
          <Ref>
            Acesso em 15 de dezembro de 2021.
          </Ref>
        </ReferenciaContainer>
      </>
    </Container>
  )
}