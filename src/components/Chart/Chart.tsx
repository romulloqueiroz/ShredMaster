import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'
import View from '../View/View'
import { PADDING, COLORS, CHART_HEIGHT, buildGraph, useGraphTouchHandler } from './Utils'
import {
  Canvas,
  Path,
  Group,
  useValue,
  useComputedValue,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia'
import { sectionByBpm } from './mock'
import { Math } from '@helpers'
import { Cursor } from './Cursor/Cursor'

type SectionByBPMList = [number, number][]
const values = sectionByBpm as SectionByBPMList

const Chart = () => {
  const window = useWindowDimensions()
  const { width } = window

  const CHART_WIDTH = width - PADDING * 2

  const graphs = useMemo(() => buildGraph(values, CHART_WIDTH, CHART_HEIGHT), [values, CHART_WIDTH])

  // path to display
  const path = graphs.path

  // x and y values of the cursor
  const x = useValue(1)
  const y = useComputedValue(
    () => Math.getYForX(path.toCmds(), x.current),
    [x, path]
  )
  const onTouch = useGraphTouchHandler(x, y, CHART_WIDTH, CHART_HEIGHT)

  const translateY = PADDING
 
  return (
    <View h={CHART_HEIGHT} w='100%' bw={2} bc='purple' mt={62}>
      <Canvas style={{ flex: 1 }} onTouch={onTouch}>
        <Group transform={[{ translateY }]}>
          <Path
            style="stroke"
            path={path}
            strokeWidth={2}
            strokeJoin="round"
            strokeCap="round"
          >
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, 0)}
              colors={COLORS}
            />
          </Path>
          <Cursor x={x} y={y} width={CHART_WIDTH} />
        </Group>
      </Canvas>
    </View>
  )
}

export default Chart
