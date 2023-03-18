import { Skia } from '@shopify/react-native-skia'
import { colors } from '@styles'
import { Math as HMath } from '@helpers'

export const PADDING = 16

export const COLORS = [colors.aqua, colors.green].map(Skia.Color)

type BPMList = [number, number][]

export const buildGraph = (
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
