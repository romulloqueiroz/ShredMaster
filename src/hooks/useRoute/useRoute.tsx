import { useRoute as nativeUseRoute, RouteProp } from '@react-navigation/native'
import { RoutesList } from '../../navigation/routes/Routes.types'

export const useRoute = <RouteName extends keyof RoutesList>() =>
  nativeUseRoute<RouteProp<RoutesList, RouteName>>()

