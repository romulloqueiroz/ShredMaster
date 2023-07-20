import { memo, useMemo, useEffect, useRef } from 'react'
import View from '../View/View'
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
  clamp, 
  useTouchHandler,
} from '@shopify/react-native-skia'
import { gradients } from '@styles'
import { addOpacity } from '@helpers'

type TouchPosition = {
  x: number;
  y: number;
}

interface CircularProgressProps {
  size?: number
  strokeWidth?: number
  color?: keyof typeof gradients
  minValue?: number
  maxValue?: number
  initialValue?: number
  onValueChange?: (value: number) => void
}

const CircularSlider: React.FC<CircularProgressProps> = ({
  size = 194,
  strokeWidth = 12,
  color = 'red',
  minValue = 0,
  maxValue = 100,
  initialValue = 0,
  onValueChange,
}) => {
  const lastValidProgressRef = useRef<number>(0);

  const radius = size / 2 - strokeWidth

  const path = useMemo(() => {
    const p = Skia.Path.Make()
    p.addCircle(strokeWidth + radius, strokeWidth + radius, radius)
    return p
  }, [radius, strokeWidth])

  const progressValue = useValue((initialValue - minValue) / (maxValue - minValue))
  const animatedProgress = useValue(progressValue.current)

  useEffect(() => {
    progressValue.current = (initialValue - minValue) / (maxValue - minValue)
  }, [initialValue, minValue, maxValue])

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

  const onTouch = useTouchHandler({
    onStart: (pos) => updateProgress(pos),
    onActive: (pos) => updateProgress(pos),
  }, [progressValue, animatedProgress])

  const updateProgress = (pos: TouchPosition) => {
    const x = pos.x - size / 2;
    const y = pos.y - size / 2;
    let angle = Math.atan2(y, x);
  
    // Normalize angle to be between 0 and 2π
    if (angle < 0) {
      angle += 2 * Math.PI;
    }
  
    let progress = angle / (2 * Math.PI);
    progress = clamp(progress, 0, 1);
    const value = minValue + (maxValue - minValue) * progress;
  
    if (value <= maxValue) {
      lastValidProgressRef.current = progress;
      progressValue.current = progress;
      animatedProgress.current = progress;
      onValueChange && onValueChange(clamp(value, minValue, maxValue));
    }
  };
  
  
  return (
    <View w={size} h={size} style={{ transform: [{ rotate: `-90deg` }] }}>
      <Canvas style={{ flex: 1 }} onTouch={onTouch}>
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

export default memo(CircularSlider)
