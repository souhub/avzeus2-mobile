import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

import { Index } from "."
import { ItemScreen } from "./components/screens"
import { actressesSelector } from "../state/ducks/actresses"

const Stack = createNativeStackNavigator()

export const Router = () => {
  const screen = actressesSelector.getScreen()
  const headerShown = () => (screen == "item" ? true : false)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: headerShown() }}>
        <Stack.Screen name='Index' component={Index} />
        <Stack.Screen name='Item' component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
