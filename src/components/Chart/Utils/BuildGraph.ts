import { Skia } from '@shopify/react-native-skia'

const PADDING = 16
type BPMList = [number, number][]

export const buildGraph = (
  datapoints: BPMList,
  WIDTH: number,
  HEIGHT: number
) => {
  const AJUSTED_SIZE = HEIGHT - PADDING * 2

  const session = datapoints.map((value) => value[0])
  const bpms = datapoints.map((value) => value[1])

  const minSession = Math.min(...session)
  const maxSession = Math.max(...session)
  const minBpm = Math.min(...bpms)
  const maxBpm = Math.max(...bpms)

  const points = datapoints.map(([session, bpm]) => {
    const x = ((session - minSession) / (maxSession - minSession)) * WIDTH
    const y = ((maxBpm - bpm) / (maxBpm - minBpm)) * AJUSTED_SIZE
    return { x, y }
  })
  
  const path = Skia.Path.Make()
  path.moveTo(points[0].x, points[0].y)
  for (let i = 1; i < points.length; i++) {
    path.lineTo(points[i].x, points[i].y)
  }

  const xValues = points.map(point => point.x)
  const yValues = points.map(point => point.y)

  return { minBpm, maxBpm, path, xValues, yValues }
}