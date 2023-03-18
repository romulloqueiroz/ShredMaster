import type { Vector } from '@shopify/react-native-skia'
import { cartesian2Polar } from '@shopify/react-native-skia'

export const controlPoint = (
  current: Vector,
  previous: Vector,
  next: Vector,
  reverse: boolean,
  smoothing: number
) => {
  const p = previous || current
  const n = next || current
  // Properties of the opposed-line
  const lengthX = n.x - p.x
  const lengthY = n.y - p.y

  const o = cartesian2Polar({ x: lengthX, y: lengthY })
  // If is end-control-point, add PI to the angle to go backward
  const angle = o.theta + (reverse ? Math.PI : 0)
  const length = o.radius * smoothing
  // The control point position is relative to the current point
  const x = current.x + Math.cos(angle) * length
  const y = current.y + Math.sin(angle) * length
  return { x, y }
}