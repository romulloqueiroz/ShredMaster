import { useEffect, useRef, useState } from 'react'
import { Canvas, Group, useValue } from '@shopify/react-native-skia'
import { View } from 'react-native-rom-components'
import { deviceWidth } from '@styles'
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

const Chart: React.FC<ChartProps> = ({ color, name, onInteraction, exercise }) => {
  const values = exercise.sectionByBpm as SectionByBPMList
  const graphs = buildGraph(values, CHART_WIDTH, CHART_HEIGHT, PADDING)

  const { path, xValues, yValues } = graphs

  const x = useValue(xValues?.[xValues.length - 1] ?? 0)
  const y = useValue(yValues?.[yValues.length - 1] ?? 0)

  const [correspondingY, setCorrespondingY] = useState<number | null>(null)
  
  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current || xValues.length !== yValues.length || (xValues.length > 0 && (x.current !== xValues[xValues.length - 1] || y.current !== yValues[yValues.length - 1]))) {
      if (xValues?.length > 0 && typeof xValues[xValues.length - 1] !== 'undefined') {
          x.current = xValues[xValues.length - 1]
      }
      if (yValues?.length > 0 && typeof yValues[yValues.length - 1] !== 'undefined') {
          y.current = yValues[yValues.length - 1]
      }

      setCorrespondingY(values?.[values.length - 1]?.[1] ?? null)

      isInitialMount.current = false
    }
  }, [xValues, yValues, values])

  const onTouch = useGraphTouchHandler(
    x, 
    y, 
    PADDING, 
    xValues, 
    yValues, 
    (idx: number) => setCorrespondingY(values[idx][1]),
    onInteraction,
  )

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
        bpm={correspondingY}
      />

      <Canvas 
        style={{ flex: 1 }} 
        onTouch={xValues.length > 0 && yValues.length > 0 ? onTouch : undefined}
      >
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
