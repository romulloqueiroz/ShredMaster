import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'
import View from '../View/View'
import Text from '../Text/Text'
import { PADDING, COLORS, buildGraph } from './Model'
import {
  Canvas,
  Path,
  Group,
  useValue,
  useComputedValue,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia'
import { prices } from './data'

type PriceList = [string, number][]
const values = prices as PriceList

const CHART_HEIGHT = 320

const Chart = () => {
  const window = useWindowDimensions();
  const { width } = window;

  const CHART_WIDTH = width - PADDING * 2;

  const graphs = useMemo(() => buildGraph(values, CHART_WIDTH, CHART_HEIGHT), [values, CHART_WIDTH]);

  // path to display
  const path = graphs.path;

  return (
    <View h={CHART_HEIGHT} w='100%' bw={2} bc='purple'>
      <Canvas style={{ flex: 1 }}>
        <Group>

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

        </Group>
      </Canvas>
    </View>
  )
}

export default Chart