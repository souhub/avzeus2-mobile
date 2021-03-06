import React from "react"
import { NativeBaseProvider } from "native-base"
import { Provider } from "react-redux"

import { store } from "./src/state/store"
import { Router } from "./src/views/router"
import { Index } from "./src/views"
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Router />
        {/* <Index /> */}
      </NativeBaseProvider>
    </Provider>
  )
}
