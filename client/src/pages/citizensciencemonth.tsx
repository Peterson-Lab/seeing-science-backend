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
import SpatialForm from '../components/SpatialForm'

const CitizenScience: React.FC = () => {
  return (
    <Layout>
      <Flex justify="center">
        <VStack
          justifyContent="center"
          alignItems="center"
          width="60vw"
          spacing={0}
        >
          <VStack w="100vw" background="#d4ede1" spacing={10} py={5}>
            <VStack>
              <Heading as="h1" size="xl">
                Citizen Science Month Challenge April 2021
              </Heading>
              <Heading as="h2" size="lg">
                The Spatial Thinking Survey Project
              </Heading>
            </VStack>
            <VStack
              width="50vw"
              bg="white"
              // border="1px"
              boxShadow="base"
              rounded="md"
              p={5}
              opacity=""
            >
              <Text>
                Being able to think about images in your mind is useful for
                learning about science. With your help, researchers in
                psychology and education can better understand how people of all
                ages see in their “mind’s eye”, and use this information to
                improve science education!
              </Text>
              <Text>
                The Spatial Thinking Survey Project invites people of all ages
                and identities to do psychology research with us! Together we’ll
                learn about spatial thinking and brainstorm ideas that will be
                used in a new tool for researchers who study spatial thinking.
                In the process, you’ll engage in all of the same steps that
                researchers do and we’ll share tips about how you can use these
                steps for your own future projects.
              </Text>
              <Text pt={3}>
                Watch the video below to get started, or click here to download
                a transcript.
              </Text>
            </VStack>
          </VStack>
          <VStack w="100vw" bg="#d4ede1" py={5}>
            <VStack>
              {/* <Heading as="h3" size="md" color="white">
                Watch this video to get started, or click here to download a
                transcript.
              </Heading> */}
              <ReactPlayer url="/cscience.mp4" controls={true} />
            </VStack>
          </VStack>
          <VStack w="100vw" bg="#fff9ec" py={5} spacing={10}>
            <VStack
              width="50vw"
              alignItems="start"
              spacing={10}
              bg="white"
              // border="1px"
              boxShadow="base"
              rounded="md"
              p={5}
            >
              <VStack alignItems="start">
                <Heading size="md" fontWeight={600}>
                  <i>Who can participate?</i>
                </Heading>
                <Text>Everyone!</Text>
              </VStack>
              <VStack alignItems="start">
                <Heading size="md" fontWeight={600}>
                  <i>How do I participate?</i>
                </Heading>
                <Text>
                  First, learn about spatial thinking by watching the video
                  below. Second, think about when you have used spatial thinking
                  in your life. Third, share your ideas in any of these ways:
                </Text>
                <OrderedList>
                  <ListItem>Type in the form below</ListItem>
                  <ListItem>Email us at edneurolab@american.edu</ListItem>
                  <ListItem>
                    Share on Twitter using #SpatialThinking or tagging
                    @SeeingScience
                  </ListItem>
                </OrderedList>
              </VStack>
            </VStack>
            <VStack>
              {/* <Heading as="h4" size="sm">
                What is spatial thinking?
              </Heading> */}
              <ReactPlayer url="/cscience.mp4" controls={true} />
            </VStack>
          </VStack>
          <VStack w="100vw" bg="#a9dbc3" py={10}>
            <VStack
              width="70vw"
              bg="white"
              // border="1px"
              boxShadow="base"
              rounded="md"
              p={5}
            >
              <Text fontWeight={600}>
                Tell us about an activity where you (or someone else) used
                spatial thinking.
              </Text>
              <Text>
                Do your best to describe it in a way so that someone who doesn’t
                know you will understand.
              </Text>
              <SpatialForm />
            </VStack>
          </VStack>
        </VStack>
      </Flex>
    </Layout>
  )
}

export default CitizenScience
