import { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { TabItemProps } from './TabItem.types'

const TabItem: React.FC<TabItemProps> = ({
  onTabPress,
  route,
  index,
  state,
  itemWidth,
  descriptors,
}) => {
  const isActive = index === state.index
  const iconScale = useSharedValue(1)

  useEffect(() => {
    if (isActive) iconScale.value = 1.1
  }, [isActive, iconScale])

  const bounce = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(
          iconScale.value,
          {
            stiffness: 80,
            damping: 20,
            mass: 0.2,
          },
          () => {
            iconScale.value = 1
          }
        ),
      },
    ],
  }))

  const { options } = descriptors[route.key]

  return (
    <TouchableOpacity
      onPress={() => onTabPress(route, index)}
      style={{
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: itemWidth,
      }}
    >
      <Animated.View style={bounce}>
        {options.tabBarIcon?.({ focused: isActive, color: '', size: 0 })}
      </Animated.View>
    </TouchableOpacity>
  )
}

export default TabItem
