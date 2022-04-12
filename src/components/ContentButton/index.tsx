import React from 'react';
import {
  Container,
  ImageBackground,
  Main,
  TitleGroup,
  Title,
  SubTitle,
} from './styles';

import _1 from '../../assets/content/01.jpg';

interface ContentProps {
  image: any,
  title: string,
  sub: string,
  onPress: () => void;
}
export function ContentButton({
  image,
  title,
  sub,
  onPress
}: ContentProps){
  return (
    <Container onPress={() => onPress()}>
     <ImageBackground source={image || _1} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
        <Main>
          <TitleGroup>
            <Title>{title || "Sem Titulo"}</Title>
            <SubTitle>{sub || "Sem Sub-Titulo"}</SubTitle>
          </TitleGroup>
        </Main>
      </ImageBackground>
    </Container>
  )
}
