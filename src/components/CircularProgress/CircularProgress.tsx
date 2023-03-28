import { memo, useMemo, useEffect } from 'react'
import View from '../View/View'
import { 
  Canvas, 
  Path, 
  Skia, 
  Group,
  useComputedValue,
  mix,
  useValue,
  runTiming,
  vec,
  SweepGradient,
} from '@shopify/react-native-skia'
import { CircularProgressProps } from './CircularProgress.types'
import { gradients } from '@styles'
import { addOpacity } from '@helpers'

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  size = 194, 
  strokeWidth = 12, 
  color = 'red',
  duration = 5,
  isPlaying = false,
  mode = 'work'
}) => {
  const progressValue = useValue(0)
  
  useEffect(() => {
    if (isPlaying) runTiming(progressValue, 1, { duration: (1 - progressValue.current) * duration * 1000 })
    else progressValue.current = progressValue.current
  }, [isPlaying, duration])

  const x = useComputedValue(() => mix(progressValue.current, 0, 180), [progressValue])
  const progress = useComputedValue(() => x.current / 180, [x])

  const radius = size / 2 - strokeWidth

  const path = useMemo(() => {
    const p = Skia.Path.Make()
    p.addCircle(strokeWidth + radius, strokeWidth + radius, radius)
    return p
  }, [radius, strokeWidth])

  useEffect(() => {
    progressValue.current = 0
    if (isPlaying) runTiming(progressValue, 1, { duration: (1 - progressValue.current) * duration * 1000 })
  }, [mode, isPlaying, duration])
  
  return (
    <View w={size} h={size} style={{transform: [{ rotate: `-90deg` }]}}>
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
            <SweepGradient 
              c={vec(size, size)}
              colors={gradients[color]} 
            />
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
