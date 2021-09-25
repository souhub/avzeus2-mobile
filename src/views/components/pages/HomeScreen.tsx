import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Heading } from "native-base"

export const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Heading mb='5'>HOME</Heading>

      <Button
        onPress={() => {
          navigation.navigate("ImageSelection")
        }}>
        Imageモード
      </Button>
      <Button onPress={() => navigation.navigate("ScoreSelection")}>
        Scoreモード
      </Button>
    </SafeAreaView>
  )
}
