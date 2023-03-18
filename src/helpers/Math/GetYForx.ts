import { cubicBezierYForX } from './CubicBezierYForX';
import type { Vector, PathCommand } from '@shopify/react-native-skia'
import { PathVerb, vec } from '@shopify/react-native-skia'

interface Cubic {
  from: Vector
  c1: Vector
  c2: Vector
  to: Vector
}

const selectCurve = (cmds: PathCommand[], x: number): Cubic | null => {
  let from: Vector = vec(0, 0)
  for (let i = 0; i < cmds.length; i++) {
    const cmd = cmds[i]
    if (cmd[0] === PathVerb.Move) {
      from = vec(cmd[1], cmd[2])
    } else if (cmd[0] === PathVerb.Cubic) {
      const c1 = vec(cmd[1], cmd[2])
      const c2 = vec(cmd[3], cmd[4])
      const to = vec(cmd[5], cmd[6])
      if (x >= from.x && x <= to.x) {
        return {
          from,
          c1,
          c2,
          to,
        }
      }
      from = to
    }
  }
  return null
}

export const getYForX = (cmds: PathCommand[], x: number, precision = 2) => {
  const c = selectCurve(cmds, x)
  if (c === null) {
    return cmds[1][6]
  }
  return cubicBezierYForX(x, c.from, c.c1, c.c2, c.to, precision)
}