import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Container
} from './styles';
import { ScreenProp } from '../../../App';

import { QuizItem } from '../../components/QuizItem';
import { Functions } from '../../utils/functions';

import { Quiz as QuizContent, QuizProps } from '../../utils/quiz';

export function Quiz(){
  const [quizQuestions, setQuizQuestions] = useState<Array<Number>>([])
  const [Quizz,setQuizz] = useState<QuizProps[]>([])
  const navigation = useNavigation<ScreenProp>();
  const { generateRandomNumbers } = new Functions;

  
  useFocusEffect(useCallback(() => {
    const quizz:QuizProps[] = [];
      generateRandomNumbers().map(q => {
        //@ts-ignore
        quizz.push(QuizContent.find(qz => qz.id === q))
      })
  
      setQuizz(quizz)
  }, []));
  return (
    <Container>
      {
        Quizz && Quizz.length > 0 && Quizz.map((q, i) => (
          <QuizItem key={i} data={q}/>
        ))
      }
    </Container>
  )
}