import { SkiaMutableValue } from '@shopify/react-native-skia'
import { clamp, useValue, useTouchHandler } from '@shopify/react-native-skia'

export const useGraphTouchHandler = (
  x: SkiaMutableValue<number>,
  y: SkiaMutableValue<number>,
  padding: number,
  xValues: number[],
  yValues: number[],
  onCursorUpdate: (index: number) => void,
  onInteraction: (id: boolean) => void,
) => {
  const gestureActive = useValue(false)
  const offsetX = useValue(0)
  const onTouch = useTouchHandler({
    onStart: (pos) => {
      gestureActive.current = true
      offsetX.current = x.current - pos.x
      onInteraction(true)
    },
    onActive: (pos) => {
      const sensitivity = 1.5
      if (gestureActive.current) {
        const potentialX = clamp(
          offsetX.current + pos.x * sensitivity,
          xValues[0],
          xValues[xValues.length - 1]
        );
        const closestIndex = xValues.reduce((prev, curr, index) => {
          return Math.abs(curr - potentialX) < Math.abs(xValues[prev] - potentialX) ? index : prev
        }, 0)
        x.current = xValues[closestIndex]
        y.current = yValues[closestIndex]
        onCursorUpdate(closestIndex);
      }
    },    
    onEnd: () => {
      if (gestureActive.current) 
        gestureActive.current = false
      onInteraction(false)
    },
  }, [x, y, padding, xValues, yValues])
  return onTouch
}
