import { Flex } from '@chakra-ui/react'
import React, { ReactChild, ReactChildren, ReactNode, useState } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { defaultUserResponse, TimelineNodeProps } from '../types'

export interface TimelineProps {
  children: ReactChild | ReactChildren | JSX.Element[] | any
  onFinish: () => void
  sendNodeData: (data: defaultUserResponse) => Promise<void>
  size: string
}

const Wrapper = ({ children }: { children?: ReactNode }): JSX.Element => {
  return (children as unknown) as JSX.Element
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  onFinish,
  sendNodeData,
  size,
}) => {
  const [activeNode, setActiveNode] = useState(0)

  const nodeCount = React.Children.count(children)

  const timelineNodeFinish = async (
    nodeData: defaultUserResponse
  ): Promise<void> => {
    await sendNodeData(nodeData)

    if (activeNode < nodeCount - 1) {
      setActiveNode(activeNode + 1)
    }
    if (activeNode === nodeCount - 1) {
      onFinish()
      console.log('finished')
    }
  }

  const screen = useFullScreenHandle()

  const childrenWithProps = React.Children.map(
    Wrapper({ children }),
    (child, index) => {
      const timeline: TimelineNodeProps = {
        onFinish: timelineNodeFinish,
        index,
        isActive: index === activeNode,
        fullscreen: screen,
      }

      return React.cloneElement(child, {
        timeline,
      })
    }
  )

  return (
    <FullScreen handle={screen}>
      <Flex
        h={`${size}vh`}
        w={`${size}vw`}
        justify="center"
        align="center"
        backgroundColor="white"
      >
        {childrenWithProps}
      </Flex>
    </FullScreen>
  )
}
