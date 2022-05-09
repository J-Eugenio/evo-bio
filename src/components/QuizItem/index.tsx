import React from 'react';
import { QuizProps } from '../../utils/quiz';

import { 
  Container,
  Title,
  Option,
  CharContainer,
  Char,
  OptionTitle
} from './styles';

const char = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F'
}

interface QuizItemProps extends QuizProps {
  question?: number;
  isSelected?: boolean;
}

interface Props {
  data?: QuizItemProps
}
export function QuizItem(data: Props){
  
  return(
    <Container>
      <Title>{'1. '+data.data?.answer}</Title>
      {data.data?.response.map(r => (
        <Option key={r.id}>
          <CharContainer isSelected={false}>
            <Char>
              {
                //@ts-ignore
                char[r.id]
              }
            </Char>
          </CharContainer>
          <OptionTitle>{r.response}</OptionTitle>
        </Option>
      ))}
    </Container>
  )
}