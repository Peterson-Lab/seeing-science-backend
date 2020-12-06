import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import TextQuestion from '../components/experiments/TextQuestion';
import ImageQuestion from '../components/experiments/ImageQuestion';
import { ImageQuestionType, questionElement, TextQuestionType } from '../types';

interface ExperimentProps {}

const questions: TextQuestionType[] = [
  {
    prompt: 'What is the capital of France?',
    answers: [
      { answerText: 'New York' },
      { answerText: 'London' },
      { answerText: 'Paris' },
      { answerText: 'Dublin' },
    ],
    correct: 2,
  },
  {
    prompt: 'Who is CEO of Tesla?',
    answers: [
      { answerText: 'Jeff Bezos' },
      { answerText: 'Elon Musk' },
      { answerText: 'Bill Gates' },
      { answerText: 'Tony Stark' },
    ],
    correct: 1,
  },
  {
    prompt: 'The iPhone was created by which company?',
    answers: [
      { answerText: 'Apple' },
      { answerText: 'Intel' },
      { answerText: 'Amazon' },
      { answerText: 'Microsoft' },
    ],
    correct: 0,
  },
  {
    prompt: 'How many Harry Potter books are there?',
    answers: [
      { answerText: '1' },
      { answerText: '4' },
      { answerText: '6' },
      { answerText: '7' },
    ],
    correct: 3,
  },
];

const imageQuestions: ImageQuestionType[] = [
  {
    prompt: '/test1/prompt1/stim.png',
    answers: [
      {
        answerImage: '/test1/prompt1/ans1.png',
      },
      {
        answerImage: '/test1/prompt1/ans2.png',
      },
      {
        answerImage: '/test1/prompt1/ans3.png',
      },
      {
        answerImage: '/test1/prompt1/ans4.png',
      },
    ],
    correct: 2,
  },
  {
    prompt: '/test1/prompt2/stim.png',
    answers: [
      {
        answerImage: '/test1/prompt2/ans1.png',
      },
      {
        answerImage: '/test1/prompt2/ans2.png',
      },
      {
        answerImage: '/test1/prompt2/ans3.png',
      },
      {
        answerImage: '/test1/prompt2/ans4.png',
      },
    ],
    correct: 2,
  },
  {
    prompt: '/test1/prompt3/stim.png',
    answers: [
      {
        answerImage: '/test1/prompt3/ans1.png',
      },
      {
        answerImage: '/test1/prompt3/ans2.png',
      },
      {
        answerImage: '/test1/prompt3/ans3.png',
      },
      {
        answerImage: '/test1/prompt3/ans4.png',
      },
    ],
    correct: 2,
  },
];

const Experiment: React.FC<ExperimentProps> = ({}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [questionStart, setQuestionStart] = useState(Date.now());
  const [elementShown, setElementShown] = useState<questionElement>('prompt');

  const handleAnswerClick = (answer: number): void => {
    const answerTime = Date.now();

    setElementShown(null);
    setLoading(true);

    const interval = answerTime - questionStart;

    console.log(interval);

    console.log(answer);

    if (imageQuestions[currentQuestion].correct === answer) {
      console.log('correct!');
    }

    if (currentQuestion === imageQuestions.length - 1) {
      console.log('last question');
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setElementShown('prompt');
    }

    setLoading(false);
    setElementShown('prompt');
  };

  return (
    <Layout>
      <Flex m="auto" justify="center" align="center" height="50vh">
        <ImageQuestion
          question={imageQuestions[currentQuestion]}
          handleAnswerClick={handleAnswerClick}
          setQuestionStart={setQuestionStart}
          loading={loading}
          elementShown={elementShown}
          setElementShown={setElementShown}
        />
      </Flex>
    </Layout>
  );
};

{
  /* <TextQuestion
          question={questions[currentQuestion]}
          handleAnswerClick={handleAnswerClick}
          setQuestionStart={setQuestionStart}
          loading={loading}
        /> */
}

export default Experiment;
