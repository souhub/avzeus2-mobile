import axios from "axios"

import { Actress, Action, Actresses, Score } from "./types"
import * as actions from "./actions"
import { aiAxios } from "../../utils/axios"
import { RootState } from "../types"
// ===========================================================================
//                                  actresses
// ===========================================================================

const setActressesWithScore = () => (dispatch: any, getStatus: any) => {
  const status: RootState = getStatus()

  dispatch(actions.loadingStatus())
  aiAxios
    .get("/init-actresses")
    .then((res) => {
      dispatch(actions.setActressesWithScore(res.data.actresses))
      dispatch(actions.succeededStatus())
    })
    .catch((err) => {
      dispatch(actions.failedStatus())
      console.log(err)
    })
    .finally(() => {
      // dispatch(actions.idleStatus())
    })
}

const addActress = (actress: Actress): Action => {
  return actions.addActress(actress)
}

const resetActresses = (): Action => {
  return actions.resetActresses()
}

const setActresses = (actresses: Actresses) => (dispatch: any) => {
  dispatch(actions.loadingStatus())
  aiAxios
    .post(
      "/score-rec",
      {
        actresses: actresses,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => {
      dispatch(actions.setActresses(res.data.actresses))
      dispatch(actions.succeededStatus())
    })
    .catch((err) => {
      dispatch(actions.failedStatus())
      console.log(err)
    })
    .finally(() => {
      // dispatch(actions.idleStatus())
    })
}

const setScore = (actress: Actress, score: Score): Action => {
  return actions.setScore(actress, score)
}

// ===========================================================================
//                                  status
// ===========================================================================

const idleStatus = (): Action => {
  return actions.idleStatus()
}

const loadingStatus = (): Action => {
  return actions.loadingStatus()
}

const succeededStatus = (): Action => {
  return actions.succeededStatus()
}

const faliedStatus = (): Action => {
  return actions.failedStatus()
}

export {
  setActressesWithScore,
  addActress,
  resetActresses,
  setActresses,
  setScore,
  idleStatus,
  loadingStatus,
  succeededStatus,
  faliedStatus,
}
