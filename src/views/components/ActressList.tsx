import React from "react"
import { Box, Text } from "native-base"

import { actressesTypes } from "../../state/ducks/actresses"

interface Props {
  actresses: actressesTypes.Actresses
}

const ActressList = ({ actresses }: Props) => {
  actresses.map((actress) => {
    return (
      <Box>
        <Text>{actress.name}</Text>
      </Box>
    )
  })
}

export { ActressList }
