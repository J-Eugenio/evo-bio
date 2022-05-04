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
  SubTitle
} from './styles';
import { ScreenProp } from '../../../App';
import { GoBackBtn } from '../../components/GoBackBtn';
import { Linking } from 'react-native';


export function AboutDev(){
  const navigation = useNavigation<ScreenProp>();

  return (
    <Container>
      <GoBackBtn />
       <Main>

        <Title>Sobre o Desenvolvedor</Title>

        <CardAuthor>
          <IconContainer>
            <Icon 
              name="user-secret"
              size={80}
              color="#FFF"
            />
          </IconContainer>

          <InfoContainer>
            <Author>José Eugênio dos Santos</Author>
            <SubTitle>Developer</SubTitle>

            <Social
              onPress={() => { Linking.openURL('https://www.linkedin.com/in/j-eugenio/') }}
            >
              <Icon 
                name="linkedin"
                size={20}
                color="#FFF"
              />
              <SocialValue>LinkedIn</SocialValue>
            </Social>

            <Social
              onPress={() => Linking.openURL('instagram://user?username=jose.eugenio.s')}
            >
              <Icon 
                name="instagram"
                size={20}
                color="#FFF"
              />
              <SocialValue>Instagram</SocialValue>
            </Social>
          </InfoContainer>
        </CardAuthor>

      </Main>
    </Container>
  )
}