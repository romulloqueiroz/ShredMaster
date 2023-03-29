import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'
import View from '../View/View'
import { PADDING, CHART_HEIGHT, buildGraph } from './utils'
import { Canvas, Path, Group, LinearGradient, vec } from '@shopify/react-native-skia'
import { sectionByBpm } from './mock'
import { HorizontalLines, Dots } from './components'
import { Skia } from '@shopify/react-native-skia'
import { gradients, GradientsType } from '@styles'

type SectionByBPMList = [number, number][]
const values = sectionByBpm as SectionByBPMList

interface ChartProps {
  color: keyof GradientsType
}

const Chart: React.FC<ChartProps> = ({ color }) => {
  const COLORS = gradients[color].map(Skia.Color)
  const window = useWindowDimensions()
  const { width } = window
  const CHART_WIDTH = width - PADDING * 2
  const graphs = useMemo(() => buildGraph(values, CHART_WIDTH, CHART_HEIGHT), [values, CHART_WIDTH])
  const path = graphs.path

  return (
    <View 
      h={CHART_HEIGHT} 
      w='100%' 
      br={8} 
      bgc='glass1'
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <Canvas style={{ flex: 1 }}>
        <Group transform={[{ translateY: PADDING }]}>

          <HorizontalLines />

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

          <Dots 
            chartWidth={CHART_WIDTH} 
            color={color}
            graphs={graphs}
          />

        </Group>
      </Canvas>
    </View>
  )
}

export default Chart
