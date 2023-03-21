import View from '../View/View'
import Text from '../Text/Text'
import { Audio } from 'expo-av'

const soundObject = new Audio.Sound()

const Metronome = () => {
  const playSound = async () => {
    try {
      await soundObject.loadAsync(require('./assets/metronome_tick.wav'))
      await soundObject.playAsync()
    } catch (error) {
      console.log('Error playing sound: ', error)
    }
  }

  return (
    <View>
      <Text>Metronome</Text>
    </View>
  )
}

export default Metronome
