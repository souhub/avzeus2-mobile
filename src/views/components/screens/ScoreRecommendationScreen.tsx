import React, { memo } from "react"
import { useDispatch } from "react-redux"
import {
  Text,
  Spinner,
  ScrollView,
  Button,
  FlatList,
  Box,
  View,
} from "native-base"

import { actressesSelector } from "../../../state/ducks/actresses"
import { RecommendationActress } from "../RecommendationActress"
import { actressesOperation } from "../../../state/ducks/actresses"
export const ScoreRecommendationScreen = memo(({ navigation }: any) => {
  const dispatch = useDispatch()
  const actresses = actressesSelector.getSortedActresses()
  const status = actressesSelector.getStatus()
  return (
    <View>
      {status == "loading" ? (
        <Spinner color='emerald.500' />
      ) : status == "succeeded" ? (
        <Box>
          <ScrollView height={400} margin={5}>
            <FlatList
              data={actresses}
              renderItem={({ item }) => (
                <RecommendationActress key={item.id} actress={item} />
              )}
            />
          </ScrollView>
        </Box>
      ) : (
        <Text>失敗しちゃったぞい！</Text>
      )}
      {status != "loading" && (
        <Button
          colorScheme='teal'
          onPress={() => {
            dispatch(actressesOperation.homeScreen())
          }}>
          ありがとうございました！
        </Button>
      )}
    </View>
  )
})
