import React, { useState } from 'react'
import { View } from 'react-native-rom-components'
import Text from '../Text/Text'
import Touchable from '../Touchable/Touchable'
import ColorTag from '../ColorTag/ColorTag'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { GradientsType } from '@styles'

interface ColorItemProps {
  color: keyof GradientsType
  name: string
  onPress?: () => void
}

const ColorItem: React.FC<ColorItemProps> = ({ color, name, onPress }) => (
  <Touchable row cross='center' onPress={onPress}>
    <ColorTag color={color} />
    <Text color='midnight2' ml={8}>{name}</Text>
  </Touchable>
)

interface ExpanderProps {
  // children: React.ReactNode
}

const Expander: React.FC<ExpanderProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const height = useSharedValue(0)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
    height.value = withTiming(isExpanded ? 0 : 200, { duration: 300 })
  }

  const containerStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      overflow: 'hidden',
    }
  })

  return (
    <View br={8} p={8} bgc='steel1'>
      <ColorItem color='green' name='Green' onPress={toggleExpand} />
      <Animated.View style={containerStyle}>
        <View mv={4} />
        <ColorItem color='yellow' name='Yellow' />
        <View mv={4} />
        <ColorItem color='red' name='Red' />
        <View mv={4} />
        <ColorItem color='purple' name='Purple' />
        <View mv={4} />
        <ColorItem color='orange' name='Orange' />
      </Animated.View>
    </View>
  )
}

export default Expander
