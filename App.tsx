import { View, Text } from '@components'
import { BaseLayout } from '@layouts'
import { useTabata } from '@hooks'
import { Pressable } from 'react-native'

const App = () => {
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
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 mt={220}>
        <Text>Time Left: {timeLeft}</Text>
        <Text>Current Round: {currentRound}</Text>
        <Text>Is Working: {isWorking ? 'Play' : 'Rest'}</Text>

        <View row mt={32}>
          <Pressable onPress={startTimer}>
            <View w={100} h={36} bw={2} bc='white' br={8} main='center' cross='center'>
              <Text>Start</Text>
            </View>
          </Pressable>
          <View mh={4} />
          <Pressable onPress={stopTimer}>
            <View w={100} h={36} bw={2} bc='white' br={8} main='center' cross='center'>
              <Text>Stop</Text>
            </View>
          </Pressable>
        </View>

      </View>
    </BaseLayout>
  )
}

export default App
