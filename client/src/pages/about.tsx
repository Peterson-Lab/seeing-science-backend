import { Flex, VStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/Layout/Layout'

const About: React.FC = () => {
  return (
    <Layout>
      <Flex justify="center">
        <VStack
          justifyContent="center"
          alignItems="center"
          spacing={8}
          width="50%"
        >
          <Heading fontSize="3vw">About</Heading>
          <Flex>
            <VStack spacing={3}>
              <Heading>Mission</Heading>
              <Text textAlign="center">
                To increase discovery in science education by empowering kids,
                teachers, parents, and scientists as participants and
                collaborators in cognitive science research.
              </Text>
            </VStack>
          </Flex>
          <Flex>
            <VStack spacing={3}>
              <Heading>Vision</Heading>
              <Text textAlign="center">
                Seeing Science is an online citizen-science website dedicated to
                investigating how kids (and adults) learn science. Through
                games, puzzles, quizzes, and challenges we seek to engage kids,
                teachers, families, and scientists as participants and
                co-investigators in cognitive science research. The particular
                focus of Seeing Science is to understand the role of visuals and
                visual-spatial thinking in science learning.
              </Text>
            </VStack>
          </Flex>
          <Flex>
            <VStack spacing={3}>
              <Heading>Values</Heading>
              <Text textAlign="center">
                Curiosity is at the heart of discovery. We believe that
                scientific discovery thrives on an openness towards exploring
                the unknown. At Seeing Science we commit to asking questions and
                exploring ideas that make science, science education, and the
                world around us a better, more equitable place.
              </Text>
              <Text textAlign="center">
                Science is not just by (and for) scientists. We believe that
                citizen science should empower diverse individuals to contribute
                to scientific discoveries while also supporting their learning.
                At Seeing Science we seek to break down barriers to
                participation in science education research and to adopt an
                asset-based perspective that values the knowledge and
                experiences of everyone involved in research.
              </Text>
              <Text textAlign="center">
                Science is collaborative. We believe that science is better when
                we work together. At Seeing Science we seek to engage
                individuals in many different stages of research, including
                participating in studies, providing feedback, asking questions,
                and analyzing data.
              </Text>
              <Text textAlign="center">
                Science must be accessible. We believe that science education
                and the scientific study of how people learn should be
                accessible to everyone, regardless of age, race, identity, or
                disability. At Seeing Science we strive to design materials that
                are developmentally appropriate, inclusive, and accessible
                regardless of disability.{' '}
              </Text>
            </VStack>
          </Flex>
        </VStack>
      </Flex>
    </Layout>
  )
}

export default About
