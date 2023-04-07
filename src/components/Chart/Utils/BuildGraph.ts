import { Skia } from '@shopify/react-native-skia'

const PADDING = 16
type BPMList = [number, number][]

export const buildGraph = (
  datapoints: BPMList,
  WIDTH: number,
  HEIGHT: number
) => {
  if (datapoints.length === 0) {
    return {
      minBpm: 0,
      maxBpm: 0,
      path: Skia.Path.Make(),
      xValues: [],
      yValues: [],
    }
  }
  
  const AJUSTED_SIZE = HEIGHT - PADDING * 2
  const HORIZONTAL_PADDING = PADDING

  const session = datapoints.map((value) => value[0])
  const bpms = datapoints.map((value) => value[1])

  const minSession = Math.min(...session)
  const maxSession = Math.max(...session)
  const minBpm = Math.min(...bpms)
  const maxBpm = Math.max(...bpms)

  const points = datapoints.map(([session, bpm]) => {
    let x, y
  
    if (minSession === maxSession) {
      x = HORIZONTAL_PADDING
    } else {
      x = ((session - minSession) / (maxSession - minSession)) * (WIDTH - HORIZONTAL_PADDING * 2) + HORIZONTAL_PADDING
    }
  
    if (minBpm === maxBpm) {
      y = AJUSTED_SIZE / 2
    } else {
      y = ((maxBpm - bpm) / (maxBpm - minBpm)) * AJUSTED_SIZE
    }
  
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
