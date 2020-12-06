import { Flex, HStack, Link, VStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ImageQuestionType, questionElement } from '../../types';
import { sleep } from '../../utils/sleep';
import { NextChakraImage } from '../NextChakraImage';

interface ImageQuestionProps {
  question: ImageQuestionType;
  handleAnswerClick: (answer: number) => void;
  loading: boolean;
  setQuestionStart: (now: number) => void;
  elementShown: questionElement;
  setElementShown: (element: questionElement) => void;
}

const ImageQuestion: React.FC<ImageQuestionProps> = ({
  question,
  handleAnswerClick,
  loading,
  setQuestionStart,
  elementShown,
  setElementShown,
}) => {
  useEffect(() => {
    setQuestionStart(Date.now());
  }, [elementShown, setQuestionStart]);

  useEffect(() => {
    if (elementShown === 'prompt') {
      const waitThenShowAnswers = async (time: number): Promise<void> => {
        await sleep(time);
        setElementShown('answers');
      };
      waitThenShowAnswers(5000);
    }
  }, [elementShown, setElementShown]);

  let body = <Text>loading...</Text>;

  if (elementShown === 'prompt') {
    body = <NextChakraImage src={question.prompt} dimensions={[100, 100]} />;
  } else if (elementShown === 'answers') {
    body = (
      <HStack spacing={4}>
        {question.answers.map((option, idx) => (
          <Link key={idx} onClick={() => handleAnswerClick(idx)}>
            <NextChakraImage src={option.answerImage} dimensions={[100, 100]} />
          </Link>
        ))}
      </HStack>
    );
  }

  return <Flex mt={6}>{body}</Flex>;
};

export default ImageQuestion;
