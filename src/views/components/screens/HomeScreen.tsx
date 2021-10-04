import React from "react"

import { Button, Heading, Center, View } from "native-base"
import { useDispatch } from "react-redux"

import { actressesOperation } from "../../../state/ducks/actresses"
import { actressesSelector } from "../../../state/ducks/actresses"
export const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch()
  const status = actressesSelector.getStatus()
  const screen = actressesSelector.getScreen()
  return (
    <View>
      {/* <Center>
        <Heading mb='5'>AV Zeus</Heading>
      </Center> */}
      <Button
        colorScheme='teal'
        onPress={() => {
          dispatch(actressesOperation.setActressesWithScore())
          dispatch(actressesOperation.scoreSelectionScreen())
          // navigation.navigate("scoreSelection")
        }}>
        AVゼウスに相談する
        {/* Scoreモード */}
      </Button>

      {/* <Button
        onPress={() => {
          navigation.navigate("ImageSelection")
        }}>
        Imageモード
      </Button> */}
    </View>
  )
}
