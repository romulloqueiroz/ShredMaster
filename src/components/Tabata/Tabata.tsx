import { useTabata } from '@hooks'
import View from '../View/View'
import Text from '../Text/Text'
import Button from '../Button/Button'
import CircularProgress from '../CircularProgress/CircularProgress'

const Tabata = () => {
  const { 
    timeLeft, 
    currentRound, 
    isWorking, 
    startTimer, 
    stopTimer 
  } = useTabata({
    rounds: 3,
    workTime: 5,
    restTime: 5,
  })

  return (
    <>
      <View 
        w={200} 
        h={200}
        main='center'
        cross='center'
      >
        <View absolute>
          <CircularProgress 
            size={200} 
            duration={10}
            color='green' 
            strokeWidth={6} 
          />
        </View>

        <View absolute>
          <CircularProgress 
            size={180} 
            duration={5}
            color='red' 
            strokeWidth={6} 
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
