import { useMemo } from 'react'
import View from '../View/View'
import { 
  Canvas, 
  Path, 
  Skia, 
  useLoop,
  useComputedValue,
  mix,
} from '@shopify/react-native-skia'
import { CircularProgressProps } from './CircularProgress.types'

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  size = 194, 
  strokeWidth = 12, 
  color = 'red',
  duration = 60
}) => {
  const t = useLoop({ duration: 3000 })
  const x = useComputedValue(() => mix(t.current, 0, 180), [t])
  const progress = useComputedValue(() => x.current / 180, [x])

  const radius = size / 2 - strokeWidth

  const path = useMemo(() => {
    const p = Skia.Path.Make()
    p.addCircle(strokeWidth + radius, strokeWidth + radius, radius)
    return p
  }, [radius, strokeWidth])

  return (
    <View w={size} h={size} style={{transform: [{ rotate: `-90deg` }]}}>
      <Canvas style={{ flex: 1 }}>
        <Path
          path={path}
          style='stroke'
          strokeWidth={strokeWidth}
          color={color}
          end={progress}
          strokeCap='round'
        />
      </Canvas>
    </View>
  )
}

export default CircularProgress
