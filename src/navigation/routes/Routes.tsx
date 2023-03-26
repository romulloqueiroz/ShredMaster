import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoutesList } from './Routes.types'
import { BottomTabNavigator } from './BottomTabNavigator'

const Stack = createNativeStackNavigator<RoutesList>()

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
    <Stack.Screen name="Root" component={BottomTabNavigator} />
  </Stack.Navigator>
)

export {
  Routes
}
