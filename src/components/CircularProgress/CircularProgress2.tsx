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
  const [currentMode, setCurrentMode] = useState('work')
  const progressValue = useValue(0)

  useEffect(() => {
    let animation: ReturnType<typeof requestAnimationFrame> | null = null
    let start: number | null = null
  
    const animate = (time: number) => {
      if (start === null) start = time
      const elapsed = time - start
      const progress = elapsed / (duration * 1000)
      progressValue.current = progress > 1 ? 1 : progress
      if (progress < 1 && currentMode === mode) animation = requestAnimationFrame(animate)
      else {
        start = null
        if (isPlaying && currentMode === mode) animate(performance.now())
      }
    }
  
    if (isPlaying && currentMode === mode) {
      progressValue.current = 0
      animate(performance.now())
    } else if (animation) cancelAnimationFrame(animation)
  
    return () => {
      if (animation) cancelAnimationFrame(animation)
    }
  }, [isPlaying, duration, progressValue, currentMode, mode])
  
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
    progressValue.current = 0
    setCurrentMode(mode)
  }, [mode, progressValue])
  
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
