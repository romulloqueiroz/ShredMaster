import React, { memo, useMemo, useEffect } from 'react'
import View from '../View/View'
import { Canvas, Path, Skia, Group, useComputedValue, useValue, runTiming } from '@shopify/react-native-skia'
import { colors } from '@styles'
import { addOpacity } from '@helpers'
import { CircularProgressProps } from './CircularProgress.types'

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 194,
  strokeWidth = 12,
  color = 'red',
  duration = 5,
  isPlaying = false,
  mode,
}) => {
  const progressValue = useValue(0)

  useEffect(() => {
    if (isPlaying) runTiming(progressValue, 1, { duration: (1 - progressValue.current) * duration * 1000 })
    else progressValue.current = progressValue.current
  }, [isPlaying, duration])

  const radius = size / 2 - strokeWidth

  const path = useMemo(() => {
    const p = Skia.Path.Make()
    p.addCircle(strokeWidth + radius, strokeWidth + radius, radius)
    return p
  }, [radius, strokeWidth])

  useEffect(() => {
    progressValue.current = 0
  }, [mode])

  const progress = useComputedValue(() => progressValue.current, [progressValue])

  return (
    <View w={size} h={size} style={{ transform: [{ rotate: `-90deg` }] }}>
       <Canvas style={{ flex: 1 }}>
        <Group>
          <Path
            path={path}
            style="stroke"
            strokeWidth={strokeWidth}
            color={addOpacity(colors[color], 0.1)}
            end={1}
            strokeCap="round"
          />
          <Path
            path={path}
            style="stroke"
            strokeWidth={strokeWidth}
            color={colors[color]}
            end={progress}
            strokeCap="round"
          />
        </Group>
      </Canvas>
    </View>
  )
}

export default memo(CircularProgress)
