import { useMemo, useEffect } from 'react'
import { Canvas, Group, useValue } from '@shopify/react-native-skia'
import View from '../View/View'
import { deviceWidth } from '@styles'
import { useExercises } from '@hooks'
import { buildGraph, useGraphTouchHandler } from './utils'
import { ChartProps, SectionByBPMList } from './Chart.types'
import { 
  HorizontalLines, 
  Dots, 
  LinePath, 
  TitleBox, 
  EntriesBox, 
  Cursor 
} from './components'

const PADDING = 16
const CHART_HEIGHT = 170
const CHART_WIDTH = deviceWidth - PADDING * 2

const Chart: React.FC<ChartProps> = ({ color, name, id }) => {
  const { exercises } = useExercises()

  const values = useMemo(() => {
    const exercise = exercises.find(exercise => exercise.id === id)
    return exercise?.sectionByBpm as SectionByBPMList
  }, [exercises, name])

  const graphs = useMemo(() => buildGraph(
    values, 
    CHART_WIDTH, 
    CHART_HEIGHT, 
    PADDING
  ), [
    values, 
    CHART_WIDTH,
    CHART_HEIGHT,
    PADDING
  ])
  const { path, xValues, yValues } = graphs

  const x = useValue(xValues[xValues.length - 1])
  const y = useValue(yValues[yValues.length - 1])

  useEffect(() => {
    if (xValues.length > 0 && yValues.length > 0) {
      x.current = xValues[xValues.length - 1]
      y.current = yValues[yValues.length - 1]
    }
  }, [xValues, yValues, x, y])
  
  const onTouch = useGraphTouchHandler(x, y, PADDING, xValues, yValues);

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

      <Canvas style={{ flex: 1 }} onTouch={onTouch}>
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
          {xValues.length > 0 && yValues.length > 0 && (
            <Cursor x={x} y={y} color={color} />
          )}
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
