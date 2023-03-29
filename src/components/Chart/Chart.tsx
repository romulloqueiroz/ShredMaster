import { useMemo } from 'react'
import View from '../View/View'
import { buildGraph } from './utils'
import { Canvas, Group } from '@shopify/react-native-skia'
import { sectionByBpm } from './mock'
import { HorizontalLines, Dots, LinePath, TitleBox, EntriesBox } from './components'
import { deviceWidth } from '@styles'
import { ChartProps, SectionByBPMList } from './Chart.types'

const PADDING = 16
const CHART_HEIGHT = 170
const CHART_WIDTH = deviceWidth - PADDING * 2
const values = sectionByBpm as SectionByBPMList

const Chart: React.FC<ChartProps> = ({ color }) => {
  const graphs = useMemo(() => buildGraph(values, CHART_WIDTH, CHART_HEIGHT), [values, CHART_WIDTH])
  const path = graphs.path

  return (
    <View 
      h={CHART_HEIGHT + PADDING*4} 
      w='100%' 
      br={8} 
      bgc='glass1'
      s={1}
    >
      <TitleBox padding={PADDING} />
      <Canvas style={{ flex: 1 }}>
        <Group transform={[{ translateY: PADDING }]}>

          <HorizontalLines 
            chartHeight={CHART_HEIGHT} 
            padding={PADDING}
          />

          <LinePath 
            path={path}
            color={color}
          />

          <Dots 
            chartWidth={CHART_WIDTH} 
            color={color}
            graphs={graphs}
          />

        </Group>
      </Canvas>
      <EntriesBox 
        graphs={graphs} 
        padding={PADDING}
      />
    </View>
  )
}

export default Chart
