import { useMemo } from 'react'
import { useTabata } from '@hooks'
import { BaseLayout } from '@layouts'
import { deviceWidth } from '@styles'
import { 
  View, 
  Text, 
  TabataDisplay,
  LinearProgress, 
  HeaderBack,
  PlayButton,
} from '@components'

const ROUNDS = 2

const Practice = () => {
  const { 
    timeLeft, 
    totalTimeLeft,
    currentRound, 
    mode,
    isRunning,
    toggleTimer, 
  } = useTabata({
    rounds: ROUNDS,
    workTime: 3,
    restTime: 3,
  })

  const DISPLAY_SIZE = useMemo(() => deviceWidth * 0.7, [deviceWidth])

  return (
    <BaseLayout>
      <HeaderBack />
      <View 
        h='100%' 
        main='center' 
        cross='center' 
        flex1
      >
        <TabataDisplay 
          size={DISPLAY_SIZE}
          totalTimeLeft={totalTimeLeft}
          isPlaying={isRunning}
          timeLeft={timeLeft}
          mode={mode}
          round={currentRound}
          totalRounds={ROUNDS}
        />

        <View 
          absolute
          rx={1}
          y={DISPLAY_SIZE - 56}
        >
          <PlayButton onPress={toggleTimer} />
        </View>

        <View mv={24} />

        <View w='100%'>
          <Text mb={8}>Round {currentRound}/{ROUNDS}</Text>
          <LinearProgress  
            color='blue'
            width={deviceWidth * 0.4}
            progress={currentRound} 
            max={ROUNDS} 
          />
        </View>

      </View>
    </BaseLayout>
  )
}

export default Practice
