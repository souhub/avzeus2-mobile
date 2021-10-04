import React, { FC } from "react"
import { Box, Button, useColorMode, Image, Link, Center } from "native-base"
import {
  HomeScreen,
  ScoreSelectionScreen,
  ScoreRecommendationScreen,
} from "./components/screens"
import { actressesOperation, actressesSelector } from "../state/ducks/actresses"
import { ImageSelectionScreen } from "./components/screens/ImageSelectionScreen"
import { ZuesWithMessage } from "./components/ZeusWithMessage"
import { useDispatch } from "react-redux"

export const Index: FC = () => {
  const dispatch = useDispatch()
  const screen = actressesSelector.getScreen()
  const status = actressesSelector.getStatus()

  const Screen: FC = () => {
    switch (screen) {
      case "scoreSelection":
        return <ScoreSelectionScreen />
      case "scoreRecommendation":
        return <ScoreRecommendationScreen />
      case "imageSelection":
        return <ImageSelectionScreen />
      //   case "item":
      //     return <itemScreen />
      //   case "imageRecommendation":
      //     return <imageRecommendation />
      default:
        return <HomeScreen />
    }
  }

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      height='100%'
      bg={colorMode === "dark" ? "coolGray.800" : "warmGray.50"}>
      <Box margin={5} height={"100%"}>
        {/* <Button onPress={() => dispatch(actressesOperation.homeScreen())}>
          home
        </Button> */}
        {/* <Button onPress={toggleColorMode} width='10%'>
          <SunIcon />
        </Button> */}
        <ZuesWithMessage screenName={screen} status={status} />
        <Screen />

        <Center margin={5}>
          <Link href='https://affiliate.dmm.com/api/'>
            <Image
              source={{
                uri: "https://p.dmm.co.jp/p/affiliate/web_service/r18_88_35.gif",
              }}
              width='88'
              height='35'
              alt='WEB SERVICE BY FANZA'
            />
          </Link>
        </Center>
      </Box>
    </Box>
  )
}
