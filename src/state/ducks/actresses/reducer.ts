import { combineReducers } from "redux"

import {
  Action,
  Actress,
  Actresses,
  ActressesActionTypes,
  Score,
  Status,
  StatusActionTypes,
  Screen,
  ScreenActionTypes,
} from "./types"

const createActress = (actress: Actress) => {
  return actress
}

const addScore = (actress: Actress, score: Score) => {
  return { ...actress, score: score }
}

const actresses = (state: Actresses = [], action: Action): Actresses => {
  switch (action.type) {
    case ActressesActionTypes.SET_WITH_SCORE:
      return [
        ...action.payload.actresses.map((actress) => {
          return { ...actress, score: 0 }
        }),
      ]
    case ActressesActionTypes.ADD_ACTRESS:
      return [...state, createActress(action.payload.actress)]
    case ActressesActionTypes.RESET:
      return []
    case ActressesActionTypes.SET:
      return [...action.payload.actresses]
    case ActressesActionTypes.SET_SCORE:
      return [
        ...state.filter((s) => s.id != action.payload.actress.id),
        addScore(action.payload.actress, action.payload.score),
      ]
    default:
      return state
  }
}

const status = (state: Status = "idle", action: Action): Status => {
  switch (action.type) {
    case StatusActionTypes.IDLE:
      return "idle"
    case StatusActionTypes.LOADING:
      return "loading"
    case StatusActionTypes.SUCCEEDED:
      return "succeeded"
    case StatusActionTypes.FAILED:
      return "failed"
    default:
      return state
  }
}

const screen = (state: Screen = "home", action: Action): Screen => {
  switch (action.type) {
    case ScreenActionTypes.HOME:
      return "home"
    case ScreenActionTypes.SCORE_SELECTION:
      return "scoreSelection"
    case ScreenActionTypes.IMAGE_SELECTION:
      return "imageSelection"
    case ScreenActionTypes.SCORE_RECOMMENDATION:
      return "scoreRecommendation"
    case ScreenActionTypes.IMAGE_RECOMMENDATION:
      return "imageRecommendation"
    case ScreenActionTypes.ITEM:
      return "item"
    default:
      return state
  }
}

const reducer = combineReducers({
  actresses,
  status,
  screen,
})

export { reducer }
