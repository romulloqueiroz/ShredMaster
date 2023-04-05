import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoutesList } from './Routes.types'
import { BottomTabNavigator } from './BottomTabNavigator'
import { Workout } from '@screens'

const Stack = createNativeStackNavigator<RoutesList>()

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
    <Stack.Screen name='Root' component={BottomTabNavigator} />
    <Stack.Screen name='Workout' component={Workout} />
  </Stack.Navigator>
)

export {
  Routes
}
