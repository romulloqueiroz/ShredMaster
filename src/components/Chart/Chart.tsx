import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'
import View from '../View/View'
import { PADDING, COLORS, CHART_HEIGHT, buildGraph } from './utils'
import { Canvas, Path, Group, LinearGradient, vec } from '@shopify/react-native-skia'
import { sectionByBpm } from './mock'
import { Dots } from './components'

type SectionByBPMList = [number, number][]
const values = sectionByBpm as SectionByBPMList

const Chart = () => {
  const window = useWindowDimensions()
  const { width } = window
  const CHART_WIDTH = width - PADDING * 2
  const graphs = useMemo(() => buildGraph(values, CHART_WIDTH, CHART_HEIGHT), [values, CHART_WIDTH])

  // path to display
  const path = graphs.path

  return (
    <View h={CHART_HEIGHT} w='100%' bw={1} bc='purple'>
      <Canvas style={{ flex: 1 }}>
        <Group transform={[{ translateY: PADDING }]}>
          <Path
            style='stroke'
            path={path}
            strokeWidth={2}
            strokeJoin='round'
            strokeCap='round'
          >
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, 0)}
              colors={COLORS}
            />
          </Path>

          {graphs.xValues.map((x, idx) => (
            <Dots 
              key={idx} 
              x={x} 
              y={graphs.yValues[idx]}
              width={CHART_WIDTH} 
            />
          ))}

        </Group>
      </Canvas>
    </View>
  )
}

export default Chart

