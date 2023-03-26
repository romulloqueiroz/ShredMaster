import { Workout } from '@screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoutesList } from './Routes.types'

const Stack = createNativeStackNavigator<RoutesList>()

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
    <Stack.Screen name="Root" component={Workout} />
  </Stack.Navigator>
)

export {
  Routes
}
