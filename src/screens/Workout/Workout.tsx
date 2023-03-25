import { useMemo } from 'react'
import { useTabata } from '@hooks'
import { BaseLayout } from '@layouts'
import { deviceWidth } from '@styles'
import { 
  View, 
  Text, 
  TabataDisplay,
  LinearProgress, 
  Button,
  Header,
} from '@components'

const Practice = () => {
  const { 
    timeLeft, 
    totalTimeLeft,
    currentRound, 
    mode,
    isRunning,
    toggleTimer, 
  } = useTabata({
    rounds: 3,
    workTime: 3,
    restTime: 3,
  })

  const PROGRESS_SIZE = useMemo(() => deviceWidth * 0.8, [deviceWidth])

  return (
    <BaseLayout>
      <Header />
      <View 
        h='100%' 
        main='center' 
        cross='center' 
        flex1
        bw={2} 
        bc='red'
      >
        <TabataDisplay 
          size={PROGRESS_SIZE}
          totalTimeLeft={totalTimeLeft}
          isPlaying={isRunning}
          timeLeft={timeLeft}
          mode={mode}
          round={currentRound}
        />

        <View h={32} />

        <View row mt={32}>
          <Button onPress={toggleTimer} title='Play/Pause' />
        </View>

        <View mv={12} />

        <View w='100%'>
          <Text mb={8}>Round {currentRound}/3</Text>
          <LinearProgress  
            color='sunset'
            width={deviceWidth * 0.4}
            progress={currentRound} 
            max={3} 
          />
        </View>

      </View>
    </BaseLayout>
  )
}

export default Practice
