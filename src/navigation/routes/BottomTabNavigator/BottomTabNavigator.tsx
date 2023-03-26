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
          tabBarIcon: ({ focused }) => <BTN.Icon active={focused} title='Home' icon='home' />
        }}
        name='Home'
        component={Workout}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <BTN.Icon active={focused} title='Progress' icon='progress' />
        }}
        name='Progress'
        component={Workout}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <BTN.Icon active={focused} title='About' icon='account' />
        }}
        name='About'
        component={Workout}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
