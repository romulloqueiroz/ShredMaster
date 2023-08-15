import { memo, useMemo, useEffect } from 'react'
import { View } from 'react-native-rom-components'
import {
  Canvas,
  Path,
  Skia,
  Group,
  useComputedValue,
  mix,
  useValue,
  vec,
  SweepGradient,
  useClockValue,
  useValueEffect,
} from '@shopify/react-native-skia'
import { CircularProgressProps } from './CircularProgress.types'
import { gradients } from '@styles'
import { addOpacity } from '@helpers'

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 194,
  strokeWidth = 12,
  color = 'red',
  maxValue = 100,
  currentValue = 0,
  mode,
}) => {
  const radius = size / 2 - strokeWidth

  const path = useMemo(() => {
    const p = Skia.Path.Make()
    p.addCircle(strokeWidth + radius, strokeWidth + radius, radius)
    return p
  }, [radius, strokeWidth])

  const progressValue = useValue(currentValue / maxValue)
  const animatedProgress = useValue(progressValue.current)

  useEffect(() => {
    progressValue.current = currentValue / maxValue
  }, [currentValue, maxValue])

  useEffect(() => {
    progressValue.current = 0
    animatedProgress.current = 0
  }, [mode])

  const clock = useClockValue()

  useValueEffect(clock, () => {
    const progressDifference = progressValue.current - animatedProgress.current
    const animationSpeed = 0.05

    if (Math.abs(progressDifference) > 0.001) {
      animatedProgress.current += progressDifference * animationSpeed
    }
  })

  const x = useComputedValue(() => mix(animatedProgress.current, 0, 180), [animatedProgress])
  const progress = useComputedValue(() => x.current / 180, [x])

  return (
    <View w={size} h={size} style={{ transform: [{ rotate: `-90deg` }] }}>
      <Canvas style={{ flex: 1 }}>
        <Group>
          <Path
            path={path}
            style='stroke'
            strokeWidth={strokeWidth}
            color={addOpacity(gradients[color][1], 0.1)}
            end={1}
            strokeCap='round'
          />
          <Group>
            <SweepGradient c={vec(size, size)} colors={gradients[color]} />
            <Path
              path={path}
              style='stroke'
              strokeWidth={strokeWidth}
              end={progress}
              strokeCap='round'
            />
          </Group>
        </Group>
      </Canvas>
    </View>
  )
}

export default memo(CircularProgress)
