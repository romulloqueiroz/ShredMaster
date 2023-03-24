import { useTabata } from '@hooks'
import View from '../View/View'
import Text from '../Text/Text'
import Button from '../Button/Button'
import CircularProgress from '../CircularProgress/CircularProgress'

const PROGRESS_SIZE = 240

const Tabata = () => {
  const { 
    timeLeft, 
    currentRound, 
    isWorking, 
    isRunning,
    startTimer, 
    stopTimer 
  } = useTabata({
    rounds: 3,
    workTime: 5,
    restTime: 5,
  })

  console.log(isWorking)

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
            color='red' 
            strokeWidth={14} 
            isPlaying={isRunning}
          />
        </View>

        <View main='center' cross='center'>
          <Text size={32}>{isWorking ? 'Work' : 'Rest'}</Text>
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
