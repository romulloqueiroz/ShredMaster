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
    currentRound, 
    mode,
    isRunning,
    startTimer, 
    stopTimer 
  } = useTabata({
    rounds: 3,
    workTime: 5,
    restTime: 5,
  })

  const PROGRESS_SIZE = useMemo(() => deviceWidth * 0.8, [deviceWidth])

  useEffect(() => {
    console.log(currentRound)
    console.log('mode', mode)
    console.log('isRunning', isRunning)
    console.log('\n\n')
  }, [mode, isRunning])

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
            duration={5}
            color={mode === 'work' ? 'green' : 'red'}
            strokeWidth={STROKE_WIDTH} 
            isPlaying={isRunning}
            mode={mode}
          />
        </View>

        <View main='center' cross='center'>
          <Text size={32}>{mode}</Text>
          <Text>Time: {timeLeft}s</Text>
          <Text>{currentRound}/3</Text>
        </View>
      </View>

      <View row mt={32}>
        <Button onPress={startTimer} title='Start' />
        <View mh={4} />
        <Button onPress={stopTimer} title='Stop' />
      </View>
    </>
  )
}

export default Tabata
