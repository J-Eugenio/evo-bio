import React from 'react';
import {
  Container,
  SuggestionContainer,
  SeggestionContent,
  RefBold,
  Ref,
} from './styles';
import { GoBackBtn } from '../../components/GoBackBtn';


export function Suggestion(){

  return (
    <Container>
      <>
        <GoBackBtn />

        <SuggestionContainer>
          <RefBold>SUGESTÃO DE SEQUÊNCIA DIDÁTICA</RefBold>
          <RefBold>TEMA: EVOLUÇÃO BIOLÓGICA</RefBold>
          <RefBold>ASSUNTO: SELEÇÃO NATUARAL – DERIVA GENÉTICA</RefBold>
          
          <SeggestionContent>
            <RefBold>01. Objetivo geral</RefBold>
            <Ref>
              Compreender, analisar e interpretar evolução biológica, 
              por meio de pesquisa realizada no Aplicativo e realização do jogo no formato de Quiz.
            </Ref>

            <RefBold>02. Objetivos específicos</RefBold>
            <Ref> ⊳ Explorar as principais teorias evolucionista; </Ref>
            <Ref> ⊳ Conhecer os principais conceitos relacionados à evolução biológica; </Ref>
            <Ref> ⊳ Compreender temas chaves da teoria da Evolução Biológica; </Ref>
            <Ref> ⊳ Aprofundar os conhecimentos relacionados a seleção natural e deriva genética; </Ref>
            <Ref> ⊳ Testar os conhecimentos adquiridos por meio da realização do Quiz. </Ref>

            <RefBold>03. Tempo de duração previsto</RefBold>
            <Ref> ⊳ 02 aulas de 50min.</Ref>

            <RefBold>04. Estratégias pedagógicas</RefBold>
            <Ref>Inicialmente solicitar que os alunos registrem as respostas no caderno do seguinte questionário (de acordo com eles sabem):</Ref>
            <Ref>     ⊳ Ao longo do tempo, desde a formação da Terra, até os dias atuais, quais eventos você acha que aconteceram para resultar nas espécies de seres vivos existentes atualmente?</Ref>
            <Ref>     ⊳ Em sua opinião, as condições ambientais e os seres vivos em nosso planeta foram sempre como os de hoje? Explique sua resposta.</Ref>
            <Ref>     ⊳ Quais acontecimentos você acredita interferir na evolução dos seres vivos?</Ref>
            <Ref>     ⊳ Quando falamos em evolução, referimo-nos ás mudanças que os organismos sofrem através do tempo e diversos pesquisadores tiveram ideias evolucionistas outros, no entanto, acreditavam que organismos eram imutáveis. Quais pesquisadores relacionados a evolução biológica você têm conhecimento?</Ref>
            <Ref>     ⊳ A seleção natural é o principal conceito dentro da teoria evolutiva proposta por Darwin. Você sabe em que consiste a seleção natural? Se sim, descreva.</Ref>
            <Ref>     ⊳ Deriva genética é um dos mecanismos da evolução. Você sabe em que consiste a deriva genética? Se sim, descreva.</Ref>
          
            <Ref>Solicitar que os alunos socializem suas respostas;</Ref>
            <Ref>A partir das respostas dos alunos, o professor deve introduzir os conhecimentos científicos relacionado ao tema;</Ref>
            <Ref>Pedir que façam o download do Aplicativo Evolução Biológica;</Ref>
            <Ref>Solicitar que os alunos façam a leitura do conteúdo e observem as imagens contidas nas seções no App e comparem com suas respostas, fazendo as devidas correções;</Ref>
            <Ref>Solicitar que os alunos socializem as alterações realizadas em suas respostas;</Ref>
            <Ref>Realizar o Quis e registrar a pontuação, se possível repetir o quis.</Ref>

            <RefBold>05. MATERIAL NECESSÁRIO</RefBold>
            <Ref> ⊳ Caderno e lápis;</Ref>
            <Ref> ⊳ Telefone celular com internet;</Ref>

            <RefBold>06. AVALIAÇÃO</RefBold>
            <Ref> ⊳ Realização e pontuação do Quiz.</Ref>

            <Ref></Ref>
          </SeggestionContent>
        </SuggestionContainer>
      </>
    </Container>
  )
}