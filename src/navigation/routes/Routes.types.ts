import { NavigatorScreenParams } from "@react-navigation/native"

export type RoutesList = {
  Root: NavigatorScreenParams<BottomTabList> | undefined
  // Details: { id: string }
}

export type BottomTabList = {
  Home: undefined
  Progress: undefined
  About: undefined
  Settings: undefined
}