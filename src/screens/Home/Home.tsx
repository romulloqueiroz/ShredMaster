import { View, Header, Text, Button } from '@components'
import { BaseLayout } from '@layouts'
import { useTabata } from '@hooks'

const secondsToMinutes = (seconds: number) => new Date(seconds * 1000).toISOString().slice(14, 19)

const Home = () => {
  const {
    currentPhase,
    currentRound,
    currentSeconds,
    isRunning,
    toggle,
    reset,
  } = useTabata({ prepare: 3, work: 3, rest: 3, rounds: 2 })

  return (
    <BaseLayout>
      <Header title='Home' />
      <View mv={18} />

      <Text>Phase: {currentPhase}</Text>
      <Text>Round: {currentRound}</Text>
      <Text>Seconds: {secondsToMinutes(currentSeconds)}</Text>
      <View mv={18} />

      <View row>
        <Button 
          onPress={toggle} 
          title={isRunning ? 'Pause' : 'Start'} 
        />
        <Button
          onPress={reset}
          title='Reset'
        />
      </View>

    </BaseLayout>
  )
}

export default Home
