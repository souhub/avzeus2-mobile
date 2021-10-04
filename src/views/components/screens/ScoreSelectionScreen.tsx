import React, { memo } from "react"
import { useDispatch } from "react-redux"

import { Button, Spinner, Text, View, Flex, ScrollView } from "native-base"

import { SelectActressWithScore } from "../SelectActressWithScore"
import {
  actressesSelector,
  actressesOperation,
} from "../../../state/ducks/actresses"

export const ScoreSelectionScreen = memo(() => {
  const dispatch = useDispatch()
  const actresses = actressesSelector.getSortedActresses()
  const status = actressesSelector.getStatus()
  return (
    <View>
      {status == "loading" ? (
        <Spinner color='emerald.500' />
      ) : status == "succeeded" ? (
        <ScrollView>
          {actresses.map((item) => (
            <SelectActressWithScore key={item.id} actress={item} />
          ))}
        </ScrollView>
      ) : (
        <Text>失敗しちゃったぞい！</Text>
      )}

      {status != "loading" && (
        <Button
          margin={5}
          colorScheme='teal'
          onPress={() => {
            dispatch(actressesOperation.setActresses(actresses))
            dispatch(actressesOperation.scoreRecommendationScreen())
            // navigation.navigate("ScoreRecommendation")
          }}>
          お願いします！
        </Button>
      )}
    </View>
  )
})
