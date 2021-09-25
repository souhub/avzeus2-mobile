import { useSelector } from "react-redux"
import { Actresses } from "./types"
import { RootState } from "../types"

// IDが小さい順に並び替えて選択
const getSortedActresses = () => {
  const actresses = useSelector(
    (state: RootState) => state.actressesState.actresses
  )
  return [...actresses].sort(
    (first, second) => parseInt(first["id"]) - parseInt(second["id"])
  )
}

const getStatus = () => {
  const status = useSelector((state: RootState) => state.actressesState.status)
  return status
}

export { getSortedActresses, getStatus }
