import { View } from '@components'
import { BaseLayout } from '@layouts'
import { GradientsType, deviceWidth } from '@styles'
import { useMemo } from 'react'
import CircularProgress from './CircularProgress2/CircularProgress'
import { useCountdown } from './CircularProgress2/useCountdown'


const Test = () => {
  const { countdown } = useCountdown(5) 
  const DISPLAY_SIZE = useMemo(() => deviceWidth * 0.7, [deviceWidth])

  return (
    <BaseLayout>
      <View absolute bw={3} bc='blue1' mt={200} w='100%' cross='center'>
        <CircularProgress 
          size={DISPLAY_SIZE - 10} 
          strokeWidth={18} 
          color='green'
          maxValue={countdown}
          currentValue={countdown}
        />
      </View>
    </BaseLayout>
  )
}

export default Test
