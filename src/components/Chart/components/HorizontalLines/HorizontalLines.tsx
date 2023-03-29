import { PADDING, CHART_HEIGHT } from '../../utils'
import { Path } from '@shopify/react-native-skia'
import { Skia } from '@shopify/react-native-skia'
import { colors, screenWidth } from '@styles'

export const HORIZONTAL_PADDING = 16

export const HorizontalLines = () => {
  const numLines = 5
  const CHART_WIDTH = screenWidth - PADDING * 2
  return (
    <>
      {Array.from(Array(numLines)).map((_, i) => {
        const y = ((i + 1) / (numLines + 1)) * CHART_HEIGHT - PADDING
        return (
          <Path
            key={i}
            style='stroke'
            path={Skia.Path.Make().moveTo(HORIZONTAL_PADDING, y).lineTo(CHART_WIDTH - HORIZONTAL_PADDING, y)}
            stroke={{ width: 1 }}
            color={colors.glass3} />
        )
      })}
    </>
  )
}
