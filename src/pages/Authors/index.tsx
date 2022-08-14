import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  Main,
  CardAuthor,
  IconContainer,
  InfoContainer,
  Author,
  Social,
  SocialValue,
} from './styles';
import { ScreenProp } from '../../../App';
import { GoBackBtn } from '../../components/GoBackBtn';


export function Authors(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <GoBackBtn />
       <Main>

        <Title>Autores</Title>

        <CardAuthor>
          <IconContainer>
            <Icon 
              name="user-alt"
              size={80}
              color="#FFF"
            />
          </IconContainer>

          <InfoContainer>
            <Author>Francisco Alves de Andrade</Author>
            <Social
              onPress={() => {}}
            >
              <SocialValue>Mestrando – PROFBIO UERN</SocialValue>
            </Social>
          </InfoContainer>
        </CardAuthor>

        <CardAuthor>
          <IconContainer>
            <Icon 
              name="user-alt"
              size={80}
              color="#FFF"
            />
          </IconContainer>

          <InfoContainer>
            <Author>Prof(a) Dra. Maria da Conceição Vieira de Almeida Menezes - UERN</Author>
            <Social
              onPress={() => {}}
            >
              <SocialValue>Orientadora</SocialValue>
            </Social>
          </InfoContainer>
        </CardAuthor>

      </Main>
    </Container>
  )
}