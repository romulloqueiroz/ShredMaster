import { useMemo } from 'react'
import View from '../View/View'
import { buildGraph } from './utils'
import { Canvas, Group } from '@shopify/react-native-skia'
import { HorizontalLines, Dots, LinePath, TitleBox, EntriesBox } from './components'
import { deviceWidth } from '@styles'
import { ChartProps, SectionByBPMList } from './Chart.types'
import { useExercises } from '@hooks'

const PADDING = 16
const CHART_HEIGHT = 170
const CHART_WIDTH = deviceWidth - PADDING * 2

const Chart: React.FC<ChartProps> = ({ color, name, id }) => {
  const { exercises } = useExercises()

  // @@@ Change for a better solution (maybe receiving the id as a prop)
  const values = useMemo(() => {
    const exercise = exercises.find(exercise => exercise.id === id)
    return exercise?.sectionByBpm as SectionByBPMList
  }, [exercises, name])

  const graphs = useMemo(() => buildGraph(values, CHART_WIDTH, CHART_HEIGHT), [values, CHART_WIDTH])
  const path = graphs.path

  return (
    <View 
      h={CHART_HEIGHT + PADDING*4} 
      w='100%' 
      br={4} 
      bgc='card'
      s={1}
    >
      <TitleBox 
        padding={PADDING} 
        name={name} 
        color={color}
      />
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
