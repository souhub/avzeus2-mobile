import React, { memo } from "react"
import { useDispatch } from "react-redux"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  Button,
  Box,
  ScrollView,
  Spinner,
  Text,
  View,
  Heading,
  VStack,
  FlatList,
} from "native-base"
import { SwipeListView } from "react-native-swipe-list-view"

import { SelectActressWithScore } from "../SelectActressWithScore"
import {
  actressesSelector,
  actressesOperation,
} from "../../../state/ducks/actresses"

export const ScoreSelectionScreen = memo(({ navigation }: any) => {
  const dispatch = useDispatch()
  const actresses = actressesSelector.getSortedActresses()
  const status = actressesSelector.getStatus()
  return (
    <SafeAreaView>
      <Button
        onPress={() => {
          navigation.navigate("ImageSelection")
        }}>
        ImageSelectionPageへ
      </Button>
      <Button
        onPress={() => {
          dispatch(actressesOperation.setActressesWithScore())
        }}>
        START
      </Button>
      <Button
        onPress={() => dispatch(actressesOperation.setActresses(actresses))}>
        SCORE RECOMMEND
      </Button>

      {status == "loading" ? (
        <Spinner color='emerald.500' />
      ) : status == "succeeded" ? (
        <FlatList
          data={actresses}
          renderItem={({ item }) => (
            <SelectActressWithScore key={item.id} actress={item} />
          )}
        />
      ) : (
        <Text>失敗したお！</Text>
      )}
    </SafeAreaView>
  )
})
