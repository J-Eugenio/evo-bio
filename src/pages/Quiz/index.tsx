import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Container,
  Space,
  Logo,
  FinishBtn,
  FinishTitle,
  FinishContainer,
  ModalContainer
} from './styles';

import { QuizItem } from '../../components/QuizItem';
import { Functions } from '../../utils/functions';
import QuizLogo from '../../assets/quiz/quiz.png';

import { Quiz as QuizContent, QuizProps } from '../../utils/quiz';
import { Modal, ActivityIndicator } from 'react-native';
import { ScorePage } from '../../components/ScorePage';


interface QuestionProps {
  question: number;
  question_id: number;
  option_id: number;
  isCorrect: boolean;
}


export function Quiz(){
  const { generateRandomNumbers } = new Functions;
  const [Quizz,setQuizz] = useState<QuizProps[]>([])

  const [question01, setQuestion01] = useState<QuestionProps>()
  const [question02, setQuestion02] = useState<QuestionProps>()
  const [question03, setQuestion03] = useState<QuestionProps>()
  const [question04, setQuestion04] = useState<QuestionProps>()
  const [question05, setQuestion05] = useState<QuestionProps>()
  const [question06, setQuestion06] = useState<QuestionProps>()
  const [question07, setQuestion07] = useState<QuestionProps>()
  const [question08, setQuestion08] = useState<QuestionProps>()
  const [question09, setQuestion09] = useState<QuestionProps>()
  const [question10, setQuestion10] = useState<QuestionProps>()

  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  const [modal, openModal] = useState(false);
  const [score, setScore] = useState(0);

  function CloseModal(){
    openModal(false);
    setScore(0);
  }

  function calcScore(){
    let score = 0;

    question01?.isCorrect === true && score ++;
    question02?.isCorrect === true && score ++;
    question03?.isCorrect === true && score ++;
    question04?.isCorrect === true && score ++;
    question05?.isCorrect === true && score ++;
    question06?.isCorrect === true && score ++;
    question07?.isCorrect === true && score ++;
    question08?.isCorrect === true && score ++;
    question09?.isCorrect === true && score ++;
    question10?.isCorrect === true && score ++;

    return score *= 50;
  }
  function resetQuestions(){
    setQuestion01(undefined)
    setQuestion02(undefined)
    setQuestion03(undefined)
    setQuestion04(undefined)
    setQuestion05(undefined)
    setQuestion06(undefined)
    setQuestion07(undefined)
    setQuestion08(undefined)
    setQuestion09(undefined)
    setQuestion10(undefined)
    setQuizz([])
    setLoading(true)
    openModal(false);
    setScore(0);
  }

  useFocusEffect(useCallback(() => {
    setLoading(true)
    setQuizz([])
    resetQuestions()
    const quizz:QuizProps[] = [];
      generateRandomNumbers().map(q => {
        //@ts-ignore
        quizz.push(QuizContent.find(qz => qz.id === q))
      })
  
      setQuizz(quizz)
      setLoading(false);
  }, []));

  function handleFinishQuestion(data: QuestionProps, setQuestion: Function){
    setQuestion(data);
  }

  useEffect(() => {
    setEnabled(
      question01  !== undefined &&
      question02  !== undefined &&
      question03  !== undefined &&
      question04  !== undefined &&
      question05  !== undefined &&
      question06  !== undefined &&
      question07  !== undefined &&
      question08  !== undefined &&
      question09  !== undefined &&
      question10  !== undefined 
    )
  },[
    question01,
    question02,
    question03,
    question04,
    question05,
    question06,
    question07,
    question08,
    question09,
    question10
  ])

  return (
    <Container>
      <Logo source={QuizLogo} resizeMode="contain"/>
      {
        loading ? (<ActivityIndicator size="large" color="#2EA60A" />) : 
        Quizz && Quizz.length > 0 && (
          <>
            <QuizItem data={{...Quizz[0], question: 1, onPress: (data) => {
              handleFinishQuestion({
                question: 1,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion01)
            }, isSelected: question01?.option_id}} />

            <QuizItem data={{...Quizz[1], question: 2, onPress: (data) => {
              handleFinishQuestion({
                question: 2,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion02)
            }, isSelected: question02?.option_id}} />

            <QuizItem data={{...Quizz[2], question: 3, onPress: (data) => {
              handleFinishQuestion({
                question: 3,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion03)
            }, isSelected: question03?.option_id}} />

            <QuizItem data={{...Quizz[3], question: 4, onPress: (data) => {
              handleFinishQuestion({
                question: 4,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion04)
            }, isSelected: question04?.option_id}} />

            <QuizItem data={{...Quizz[4], question: 5, onPress: (data) => {
              handleFinishQuestion({
                question: 5,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion05)
            }, isSelected: question05?.option_id}} />

            <QuizItem data={{...Quizz[5], question: 6, onPress: (data) => {
              handleFinishQuestion({
                question: 6,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion06)
            }, isSelected: question06?.option_id}} />

            <QuizItem data={{...Quizz[6], question: 7, onPress: (data) => {
              handleFinishQuestion({
                question: 7,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion07)
            }, isSelected: question07?.option_id}} />

            <QuizItem data={{...Quizz[7], question: 8, onPress: (data) => {
              handleFinishQuestion({
                question: 8,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion08)
            }, isSelected: question08?.option_id}} />

            <QuizItem data={{...Quizz[8], question: 9, onPress: (data) => {
              handleFinishQuestion({
                question: 9,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion09)
            }, isSelected: question09?.option_id}} />

            <QuizItem data={{...Quizz[9], question: 10, onPress: (data) => {
              handleFinishQuestion({
                question: 10,
                question_id: data.question_id,
                option_id: data.option_id,
                isCorrect: data.isCorrect
              }, setQuestion10)
            }, isSelected: question10?.option_id}} />

          </>
        )
      }

      <FinishContainer>
        <FinishBtn 
          enabled={enabled} 
          disabled={!enabled}
          onPress={() => {openModal(true)}}
        >
          <FinishTitle>Finalizar</FinishTitle>
        </FinishBtn>
      </FinishContainer>
      <Modal
          visible={modal}
          transparent
          animationType='slide'
        >
          <ModalContainer>
            <ScorePage 
              onClose={() => {CloseModal()}}
              qt1={question01?.isCorrect}
              qt2={question02?.isCorrect}
              qt3={question03?.isCorrect}
              qt4={question04?.isCorrect}
              qt5={question05?.isCorrect}
              qt6={question06?.isCorrect}
              qt7={question07?.isCorrect}
              qt8={question08?.isCorrect}
              qt9={question09?.isCorrect}
              qt10={question10?.isCorrect}
              score={calcScore()}
            />
          </ModalContainer>
        </Modal>
      <Space />
    </Container>
  )
}