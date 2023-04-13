import React from 'react'
import { Group, Circle, useComputedValue, Paint } from '@shopify/react-native-skia'
import { CursorProps } from './Cursor.types'

export const Cursor: React.FC<CursorProps> = ({ x, y, color }) => {
  const transform = useComputedValue(
    () => [{ translateX: x.current }, { translateY: y.current }],
    [x, y]
  )
  
  return (
    <Group transform={transform}>
      <Circle cx={0} cy={0} r={22} color={color} opacity={0.15} />
      <Circle cx={0} cy={0} r={16} color={color} opacity={0.15} />
      <Circle cx={0} cy={0} r={7} color={color}>
        <Paint style='stroke' strokeWidth={2} color='white' />
      </Circle>
    </Group>
  )
}
