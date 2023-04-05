import { useNavigation as nativeNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RoutesList } from '../../navigation/routes/Routes.types'

export const useNavigation = () => nativeNavigation<NativeStackNavigationProp<RoutesList>>()


