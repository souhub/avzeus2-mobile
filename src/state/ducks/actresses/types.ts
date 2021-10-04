export type Action =
  | {
      type: ActressesActionTypes.SET_WITH_SCORE
      payload: {
        actresses: Actresses
      }
    }
  | {
      type: ActressesActionTypes.ADD_ACTRESS
      payload: {
        actress: Actress
      }
    }
  | { type: ActressesActionTypes.RESET }
  | {
      type: ActressesActionTypes.SET
      payload: {
        actresses: Actresses
      }
    }
  | {
      type: ActressesActionTypes.SET_SCORE
      payload: {
        actress: Actress
        score: Score
      }
    }
  | {
      type: StatusActionTypes.IDLE
    }
  | {
      type: StatusActionTypes.LOADING
    }
  | {
      type: StatusActionTypes.SUCCEEDED
    }
  | {
      type: StatusActionTypes.FAILED
    }
  | {
      type: ScreenActionTypes.HOME
    }
  | {
      type: ScreenActionTypes.SCORE_SELECTION
    }
  | {
      type: ScreenActionTypes.SCORE_RECOMMENDATION
    }
  | {
      type: ScreenActionTypes.IMAGE_SELECTION
    }
  | {
      type: ScreenActionTypes.IMAGE_RECOMMENDATION
    }
  | {
      type: ScreenActionTypes.ITEM
    }

export enum ActressesActionTypes {
  SET_WITH_SCORE = "actresses/initActresses",
  ADD_ACTRESS = "actresses/addActress",
  RESET = "actresses/reetActresses",
  SET = "actresses/setActresses",
  SET_SCORE = "actresses/addScore",
}

export enum StatusActionTypes {
  IDLE = "status/idle",
  LOADING = "status/loading",
  SUCCEEDED = "status/succeeded",
  FAILED = "status/failed",
}

export enum ScreenActionTypes {
  HOME = "screen/home",
  SCORE_SELECTION = "screen/scoreSelection",
  IMAGE_SELECTION = "screen/imageSelection",
  SCORE_RECOMMENDATION = "screen/scoreRecommendation",
  IMAGE_RECOMMENDATION = "screen/imageRecommendation",
  ITEM = "screen/item",
}

export type Status = "idle" | "loading" | "succeeded" | "failed"
export type Screen =
  | "home"
  | "scoreSelection"
  | "scoreRecommendation"
  | "imageSelection"
  | "imageRecommendation"
  | "item"

export interface Actress {
  id: Id
  name: Name
  ruby: Ruby
  bust: Bust
  cup: Cup
  waist: Waist
  hip: Hip
  height: Height
  birthday: Birthday
  blood_type: BloodType
  hobby: Hobby
  prefectures: Prefectures
  imageURL: ImageURL | null
  listURL: ListURL
  Score: Score
}

type Id = string
type Name = string
type Ruby = string
type Bust = string
type Cup = string
type Waist = string
type Hip = string
type Height = string
type Birthday = string
type BloodType = string
type Hobby = string
type Prefectures = string

interface ImageURL {
  small: string
  large: string
}

interface ListURL {
  digital: string
  monthly_premium: string
  mono: string
  rental: string
}

export type Score = number

export type Actresses = Actress[]

export interface ActressesState {
  actresses: Actresses
  status: Status
  screen: Screen
}
