import React from "react"
import { WebView } from "react-native-webview"

export const ItemScreen = ({ route }: any) => {
  const { listItem }: any = route.params
  console.log("listItem", listItem)
  return (
    <WebView
      source={{
        uri: listItem,
      }}
    />
  )
}
