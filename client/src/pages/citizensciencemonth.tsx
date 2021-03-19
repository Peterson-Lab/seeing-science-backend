import {
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import ReactPlayer from 'react-player'
import Layout from '../components/Layout/Layout'

const CitizenScience: React.FC = () => {
  return (
    <Layout>
      <Flex justify="center" mt={50}>
        <VStack
          justifyContent="center"
          alignItems="center"
          width="60vw"
          spacing={10}
        >
          <VStack>
            <Heading>Citizen Science Month Challenge! April 2021</Heading>
            <Heading>The Spatial Thinking Survey Project</Heading>
          </VStack>
          <VStack>
            <Text>
              Being able to think about images in your mind is useful for
              learning about science. With your help, researchers in psychology
              and education can better understand how people of all ages see in
              their “mind’s eye”, and use this information to improve science
              education!
            </Text>
            <Text>
              The Spatial Thinking Survey Project invites people of all ages and
              identities to do psychology research with us! Together we’ll learn
              about spatial thinking and brainstorm ideas that will be used in a
              new tool for researchers who study spatial thinking. In the
              process, you’ll engage in all of the same steps that researchers
              do and we’ll share tips about how you can use these steps for your
              own future projects.
            </Text>
          </VStack>
          <VStack>
            <ReactPlayer url="/cscience.mp4" controls={true} />
          </VStack>
          <VStack>
            <Text fontWeight={600}>Who can participate?</Text>
            <Text>Everyone!</Text>
            <Text fontWeight={600}>How do I participate?</Text>
            <Text>
              First, learn about spatial thinking by watching the video below.
              Second, think about when you have used spatial thinking in your
              life. Third, share your ideas in any of these ways:
              <OrderedList>
                <ListItem>Type in the form below</ListItem>
                <ListItem>Email us at edneurolab@american.edu</ListItem>
                <ListItem>
                  Share on Twitter using #SpatialThinking or tagging
                  @SeeingScience
                </ListItem>
              </OrderedList>
            </Text>
          </VStack>
          <VStack>
            <Text fontWeight={600}>What is spatial thinking?</Text>
            <ReactPlayer url="/cscience.mp4" controls={true} />
          </VStack>
          <VStack>
            <Text fontWeight={600}>
              Tell us about an activity where you (or someone else) used spatial
              thinking.
            </Text>
            <Text>
              Do your best to describe it in a way so that someone who doesn’t
              know you will understand.
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Layout>
  )
}

export default CitizenScience
