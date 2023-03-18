import {
  Skia,
  runDecay,
  add,
  clamp,
  dist,
  vec,
  useValue,
  useTouchHandler,
} from '@shopify/react-native-skia'
import type { SkiaMutableValue, SkiaValue } from '@shopify/react-native-skia'

import { colors } from '@styles'
import { Math as HMath } from '@helpers'

const PADDING = 16
const CHART_HEIGHT = 320
const COLORS = [colors.aqua, colors.green].map(Skia.Color)

type BPMList = [number, number][]

const buildGraph = (
  datapoints: BPMList,
  WIDTH: number,
  HEIGHT: number
) => {
  const AJUSTED_SIZE = HEIGHT - PADDING * 2

  const bpms = datapoints.map((value) => value[0])
  const session = datapoints.map((value) => value[1])

  const minSession = Math.min(...session)
  const maxSession = Math.max(...session)
  const minBpm = Math.min(...bpms)
  const maxBpm = Math.max(...bpms)

  const points = datapoints.map(([bpm, session]) => {
    const x = ((session - minSession) / (maxSession - minSession)) * WIDTH
    const y = ((bpm - minBpm) / (maxBpm - minBpm)) * AJUSTED_SIZE
    return { x, y }
  })

  points.push({ x: WIDTH + 10, y: points[points.length - 1].y })
  const path = HMath.curveLines(points, 0.1, 'complex')

  return { minBpm, maxBpm, path }
}

const useGraphTouchHandler = (
  x: SkiaMutableValue<number>,
  y: SkiaValue<number>,
  width: number,
  height: number
) => {
  const translateY = height + PADDING
  const gestureActive = useValue(false)
  const offsetX = useValue(0)
  const onTouch = useTouchHandler({
    onStart: (pos) => {
      const normalizedCenter = add(
        vec(x.current, y.current),
        vec(0, translateY)
      )
      if (dist(normalizedCenter, pos) < 50) {
        gestureActive.current = true
        offsetX.current = x.current - pos.x
      }
    },
    onActive: (pos) => {
      if (gestureActive.current) {
        x.current = clamp(offsetX.current + pos.x, 0, width)
      }
    },
    onEnd: ({ velocityX }) => {
      if (gestureActive.current) {
        gestureActive.current = false
        runDecay(x, { velocity: velocityX, clamp: [0, width] })
      }
    },
  })
  return onTouch
}

export {
  buildGraph,
  useGraphTouchHandler,
  PADDING,
  CHART_HEIGHT,
  COLORS,
}