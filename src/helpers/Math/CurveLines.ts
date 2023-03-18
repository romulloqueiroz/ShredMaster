import { controlPoint } from './ControlPoint'
import { Skia } from '@shopify/react-native-skia'
import type { Vector } from '@shopify/react-native-skia'
import { exhaustiveCheck } from '@shopify/react-native-skia/src/renderer/typeddash'

export const curveLines = (
  points: Vector[],
  smoothing: number,
  strategy: 'complex' | 'bezier' | 'simple'
) => {
  const path = Skia.Path.Make()
  path.moveTo(points[0].x, points[0].y)
  // build the d attributes by looping over the points
  for (let i = 0; i < points.length; i++) {
    if (i === 0) {
      continue
    }
    const point = points[i]
    const next = points[i + 1]
    const prev = points[i - 1]
    const cps = controlPoint(prev, points[i - 2], point, false, smoothing)
    const cpe = controlPoint(point, prev, next, true, smoothing)
    switch (strategy) {
      case 'simple':
        const cp = {
          x: (cps.x + cpe.x) / 2,
          y: (cps.y + cpe.y) / 2,
        }
        path.quadTo(cp.x, cp.y, point.x, point.y)
        break
      case 'bezier':
        const p0 = points[i - 2] || prev
        const p1 = points[i - 1]
        const cp1x = (2 * p0.x + p1.x) / 3
        const cp1y = (2 * p0.y + p1.y) / 3
        const cp2x = (p0.x + 2 * p1.x) / 3
        const cp2y = (p0.y + 2 * p1.y) / 3
        const cp3x = (p0.x + 4 * p1.x + point.x) / 6
        const cp3y = (p0.y + 4 * p1.y + point.y) / 6
        path.cubicTo(cp1x, cp1y, cp2x, cp2y, cp3x, cp3y)
        if (i === points.length - 1) {
          path.cubicTo(
            points[points.length - 1].x,
            points[points.length - 1].y,
            points[points.length - 1].x,
            points[points.length - 1].y,
            points[points.length - 1].x,
            points[points.length - 1].y
          )
        }
        break
      case 'complex':
        path.cubicTo(cps.x, cps.y, cpe.x, cpe.y, point.x, point.y)
        break
      default:
        exhaustiveCheck(strategy)
    }
  }
  return path
}