import { View } from '@components'
import { useMemo } from 'react'
import { Dimensions } from 'react-native'
import CircularProgress from './CircularProgress2/CircularProgress'
import { useCountdown } from './CircularProgress2/useCountdown'
const { width: deviceWidth } = Dimensions.get('screen')

const MAX_VALUE = 5

const Test = () => {
  const { countdown } = useCountdown(MAX_VALUE) 
  const DISPLAY_SIZE = useMemo(() => deviceWidth * 0.7, [deviceWidth])

  return (
    <View>
      <View mb={200} />

      <CircularProgress 
        size={DISPLAY_SIZE} 
        strokeWidth={18} 
        maxValue={MAX_VALUE}
        currentValue={MAX_VALUE - countdown}
      />
    </View>
  )
}

export default Test
