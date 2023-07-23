import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoutesList } from './Routes.types'
import { BottomTabNavigator } from './BottomTabNavigator'
import { Tabata, Timer } from '@screens'
import Test from './Test/Test'

const Stack = createNativeStackNavigator<RoutesList>()

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
    {/* <Stack.Screen name='Root' component={Test} /> */}
    <Stack.Screen name='Root' component={BottomTabNavigator} />
    <Stack.Screen name='Tabata' component={Tabata} />
    <Stack.Screen name='Timer' component={Timer} />
  </Stack.Navigator>
)

export {
  Routes
}
