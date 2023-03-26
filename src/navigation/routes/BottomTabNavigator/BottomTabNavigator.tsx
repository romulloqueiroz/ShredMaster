import { BottomTabNavigator as BTN } from '@components'
import { Workout } from '@screens'
import { BottomTabList } from '../Routes.types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator<BottomTabList>()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BTN.TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        options={{
            // title: 'Home',
            tabBarIcon: ({ focused }) => (
              <BTN.Icon active={focused} title='Home' icon='play' />
            ),
          }}
          name='Home'
          component={Workout}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
