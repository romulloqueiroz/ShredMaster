import { NavigatorScreenParams } from "@react-navigation/native"
import { GradientsType } from "@styles"

export type RoutesList = {
  Root: NavigatorScreenParams<BottomTabList> | undefined
  Tabata: { 
    id: string, 
    name: string, 
    bpm: number,
    color: keyof GradientsType 
    // prepare: number
    // work: number
    // rest: number
    // rounds: number
  }
  Timer: {
    id: string
    name: string
    bpm: number
    color: keyof GradientsType
    // prepare: number
    timer: number
  }
}

export type BottomTabList = {
  Home: undefined
  Progress: undefined
  About: undefined
}
