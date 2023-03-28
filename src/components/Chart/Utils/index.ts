import { Skia } from '@shopify/react-native-skia'
import { buildGraph } from './BuildGraph'
import { useGraphTouchHandler } from './UseGraphTouchHandler'
import { colors } from '@styles'

const PADDING = 16
const CHART_HEIGHT = 320
const COLORS = [colors.green1, colors.green2].map(Skia.Color)

export {
  buildGraph,
  useGraphTouchHandler,
  PADDING,
  CHART_HEIGHT,
  COLORS,
}