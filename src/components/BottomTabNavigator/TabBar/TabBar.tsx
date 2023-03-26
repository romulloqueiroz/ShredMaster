import { useEffect } from 'react'
import { Dimensions } from 'react-native'
import View from '../../View/View'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import TabItem from '../TabItem/TabItem'
import { TabBarProps } from './TabBar.types'

const { width } = Dimensions.get('window')

const TabBar: React.FC<Partial<TabBarProps>> = ({ state, navigation, descriptors, margin = 8 }) => {
  //number of routes for calculating width
  const numOfRoutes = state?.routes.length ?? 0
  const translateShared = useSharedValue(0)

  //width of bottom tab based on margin
  const bottomTabWidth = width - margin * 2

  // width of each item = width of mover
  const itemWidth = bottomTabWidth / numOfRoutes

  const translate = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translateShared.value, {
          stiffness: 80,
          damping: 20,
          mass: 0.2,
        }),
      },
    ],
  }))

  useEffect(() => {
    const index = state?.index ?? 0
    translateShared.value = bottomTabWidth * (index / numOfRoutes)
  }, [state?.index, bottomTabWidth, translateShared, numOfRoutes])

  const onTabPress = (route: any, index: number) => {
    const event = navigation?.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })
    const isFocused = state?.index === index
    if (!isFocused && !event?.defaultPrevented) {
      navigation?.navigate(route.name)
    }
  }

  return (
    <View bgc='background'>
      <View row pb={20} btlr={16} btrr={16} bgc='gray2'>
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              alignItems: 'center',
              width: itemWidth,
            },
            translate,
          ]}
        >
          <View bgc='blue' br={20} w={24} h={4} />
        </Animated.View>

        {state?.routes.map((route, index) => (
          <TabItem
            key={route.key}
            route={route}
            index={index}
            state={state}
            descriptors={descriptors!}
            onTabPress={onTabPress}
            itemWidth={itemWidth}
          />
        ))}
      </View>
    </View>
  )
}

export default TabBar
