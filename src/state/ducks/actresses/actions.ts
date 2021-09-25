import {
  Action,
  Actress,
  Actresses,
  ActressesActionTypes,
  Score,
  StatusActionTypes,
} from "./types"

// ===========================================================================
//                                  actresses
// ===========================================================================

const setActressesWithScore = (actresses: Actresses): Action => {
  return {
    type: ActressesActionTypes.SET_WITH_SCORE,
    payload: {
      actresses,
    },
  }
}

const addActress = (actress: Actress): Action => {
  return {
    type: ActressesActionTypes.ADD_ACTRESS,
    payload: {
      actress,
    },
  }
}

const resetActresses = (): Action => {
  return {
    type: ActressesActionTypes.RESET,
  }
}

const setActresses = (actresses: Actresses): Action => {
  return {
    type: ActressesActionTypes.SET,
    payload: {
      actresses,
    },
  }
}

const setScore = (actress: Actress, score: Score = 0): Action => {
  return {
    type: ActressesActionTypes.SET_SCORE,
    payload: {
      actress,
      score,
    },
  }
}

// ===========================================================================
//                                  status
// ===========================================================================

const idleStatus = (): Action => {
  return {
    type: StatusActionTypes.IDLE,
  }
}

const loadingStatus = (): Action => {
  return {
    type: StatusActionTypes.LOADING,
  }
}

const succeededStatus = (): Action => {
  return {
    type: StatusActionTypes.SUCCEEDED,
  }
}

const failedStatus = (): Action => {
  return {
    type: StatusActionTypes.FAILED,
  }
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
  failedStatus,
}
