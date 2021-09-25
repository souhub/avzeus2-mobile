import React, { FC, memo, useState } from "react"
import { Box, Text, Image, View, VStack, HStack } from "native-base"
import { useDispatch } from "react-redux"
import { Slider } from "native-base"

import {
  actressesOperation,
  actressesSelector,
} from "../../state/ducks/actresses"
import { Actress } from "../../state/ducks/actresses/types"

type Props = {
  actress: Actress
}

export const SelectActressWithScore: FC<Props> = memo((props) => {
  const { actress } = props
  const [scoreView, setScoreView] = useState(0)
  const dispatch = useDispatch()
  const url =
    actress.imageURL?.small ||
    "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80"
  const status = actressesSelector.getStatus()

  return (
    <Box key={actress.id} style={{ marginBottom: 20 }}>
      <HStack>
        <Slider
          width='50%'
          defaultValue={0}
          colorScheme='pink'
          size='lg'
          onChange={(e) => setScoreView(e)} // リアルタイムでスコア確認する用
          onChangeEnd={(e) => dispatch(actressesOperation.setScore(actress, e))} // 最終的にdispatchする用
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>

        <Box>
          <Text>
            {actress.name} {scoreView}
          </Text>
          <Image source={{ uri: url }} alt='an actress image' size='xl' />
        </Box>
      </HStack>
    </Box>
  )
})
