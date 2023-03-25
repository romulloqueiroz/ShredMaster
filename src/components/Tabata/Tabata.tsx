import { useMemo, useEffect } from 'react'
import { useTabata } from '@hooks'
import { deviceWidth } from '@styles'
import View from '../View/View'
import Text from '../Text/Text'
import Button from '../Button/Button'
import CircularProgress from '../CircularProgress/CircularProgress'

const STROKE_WIDTH = 18

const Tabata = () => {
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
    restTime: 5,
  })

  const PROGRESS_SIZE = useMemo(() => deviceWidth * 0.8, [deviceWidth])

  return (
    <>
      <View 
        w={PROGRESS_SIZE} 
        h={PROGRESS_SIZE}
        main='center'
        cross='center'
      >
        <View absolute>
          <CircularProgress 
            size={PROGRESS_SIZE} 
            duration={totalTimeLeft}
            color='sunset'
            strokeWidth={8} 
            isPlaying={isRunning}
          />
        </View>

        <View absolute>
          <CircularProgress 
            size={PROGRESS_SIZE - 10} 
            duration={timeLeft}
            color={mode === 'work' ? 'green' : 'red'}
            strokeWidth={STROKE_WIDTH} 
            isPlaying={isRunning}
            mode={mode}
          />
        </View>

        <View main='center' cross='center'>
          <Text size={32}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</Text>
          <Text>Time: {timeLeft}s</Text>
          <Text>{currentRound}/3</Text>
        </View>
      </View>

      <View row mt={32}>
        <Button onPress={toggleTimer} title='Play/Pause' />
      </View>
    </>
  )
}

export default Tabata
