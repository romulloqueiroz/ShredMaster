import { useTabata } from '@hooks'
import View from '../View/View'
import Text from '../Text/Text'
import Button from '../Button/Button'

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
      <Text>Time Left: {timeLeft}</Text>
      <Text>Current Round: {currentRound}</Text>
      <Text>Is Working: {isWorking ? 'Play' : 'Rest'}</Text>

      <View row mt={32}>
        <Button onPress={startTimer} title='Start' />
        <View mh={4} />
        <Button onPress={stopTimer} title='Stop' />
      </View>
    </>
  )
}

export default Tabata