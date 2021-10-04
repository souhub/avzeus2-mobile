import React, { FC, memo } from "react"
import { Box, Text, Image, Flex, Link } from "native-base"
import { Button } from "native-base"

import {
  actressesOperation,
  actressesSelector,
} from "../../state/ducks/actresses"
import { Actress } from "../../state/ducks/actresses/types"
import { useNavigation } from "@react-navigation/core"
import { useDispatch } from "react-redux"
import { Entypo } from "@expo/vector-icons"

type Props = {
  actress: Actress
}

export const RecommendationActress: FC<Props> = memo((props) => {
  const { actress } = props
  const url =
    actress.imageURL?.small ||
    "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80"
  const status = actressesSelector.getStatus()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <Box key={actress.id}>
      <Flex direction='row'>
        <Box marginRight={5}>
          <Image source={{ uri: url }} alt='an actress image' size='md' />
        </Box>
        <Flex direction='column'>
          <Text fontSize='xl' fontWeight='extrabold'>
            {actress.name}
          </Text>

          {/* <Button
            onPress={() => {
              //   return <ActressItemScreen />
              // console.log(actress.listURL.digital)
              navigation.push("Item", {
                listItem: actress.listURL.digital,
              })
              dispatch(actressesOperation.itemScreen())
            }}
            width={150}>
            作品を見る
          </Button> */}
          <Link href={actress.listURL.digital}>
            <Button
              width={150}
              marginTop={1}
              colorScheme='pink'
              endIcon={<Entypo name='link' size={24} color='white' />}>
              作品を見る
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
})
