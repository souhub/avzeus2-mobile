import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { ScoreSelectionScreen } from "./components/pages/ScoreSelectionPage"
import { HomeScreen } from "./components/pages/HomeScreen"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Text, View } from "react-native"
// export type RootStackParamList = {
//   ScoreSelection: undefined
//   ImageSelection: undefined
// }

// const RootStack = createStackNavigator<RootStackParamList>()

import { ImageSelectionScreen } from "./components/pages/ImageSelectionPage"

const Stack = createNativeStackNavigator()

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='ScoreSelection' component={ScoreSelectionScreen} />
        <Stack.Screen name='ImageSelection' component={ImageSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
