import React from 'react';
import { QuizProps } from '../../utils/quiz';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
  isSelected?: number;
  onPress: (data: any) => void;
}

interface Props {
  data?: QuizItemProps
}


export function QuizItem(data: Props){
  
  return(
    <Container>
      <Title>{`${data.data?.question || '??'}. `+data.data?.answer}</Title>
      {data.data?.response.map(r => (
        <Option key={r.id} onPress={() => {
          data.data?.onPress({
            question_id: data.data.id,
            option_id: r.id,
            isCorrect: r.isCorrect
          })
        }}>
          <CharContainer isSelected={data.data?.isSelected === r.id}>
            <Char>
              {
                //@ts-ignore
                char[r.id]
              }
            </Char>
          </CharContainer>
          <OptionTitle>{r.response}</OptionTitle>
          {data.data?.isSelected === r.id && (<FontAwesome5 name='seedling' size={20} color='#00ff37d1' />)}
        </Option>
      ))}
    </Container>
  )
}