import { NavigatorScreenParams } from "@react-navigation/native"
import { GradientsType } from "@styles"

export type RoutesList = {
  Root: NavigatorScreenParams<BottomTabList> | undefined
  Workout: { 
    id: string, 
    name: string, 
    color: keyof GradientsType 
  }
}

export type BottomTabList = {
  Home: undefined
  Progress: undefined
  About: undefined
}
