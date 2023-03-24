import { useMemo, useEffect, useState } from 'react'
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
} from '@shopify/react-native-skia'
import { CircularProgressProps } from './CircularProgress.types'
import { colors } from '@styles'
import { addOpacity } from '@helpers'

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  size = 194, 
  strokeWidth = 12, 
  color = 'red',
  duration = 5,
  isPlaying = false,
  mode = 'work'
}) => {
  const [pausedProgress, setPausedProgress] = useState<number>(0)

  const progressValue = useValue(0)
  useEffect(() => {
    if (isPlaying) runTiming(progressValue, 1, { duration: (1 - pausedProgress) * duration * 1000 })
    else {
      setPausedProgress(progressValue.current)
      progressValue.current = progressValue.current
    }
  }, [isPlaying, duration, progressValue])

  const x = useComputedValue(() => mix(progressValue.current, 0, 180), [progressValue])
  const progress = useComputedValue(() => x.current / 180, [x])

  const radius = size / 2 - strokeWidth

  const path = useMemo(() => {
    const p = Skia.Path.Make()
    p.addCircle(strokeWidth + radius, strokeWidth + radius, radius)
    return p
  }, [radius, strokeWidth])

  const backgroundPath = useMemo(() => {
    const p = Skia.Path.Make()
    p.addCircle(strokeWidth + radius, strokeWidth + radius, radius)
    return p
  }, [radius, strokeWidth])

  useEffect(() => {
    setPausedProgress(0)
    progressValue.current = 0
  }, [mode])
  
  return (
    <View w={size} h={size} style={{transform: [{ rotate: `-90deg` }]}}>
      <Canvas style={{ flex: 1 }}>
        <Group>
          <Path
            path={backgroundPath}
            style='stroke'
            strokeWidth={strokeWidth}
            color={addOpacity(colors[color], 0.1)}
            end={1}
            strokeCap='round'
          />
          <Path
            path={path}
            style='stroke'
            strokeWidth={strokeWidth}
            color={colors[color]}
            end={progress}
            strokeCap='round'
          />
        </Group>
      </Canvas>
    </View>
  )
}

export default CircularProgress
