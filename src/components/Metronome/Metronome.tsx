import Text from '../Text/Text'
import Button from '../Button/Button'
import { useMetronome } from '@hooks'

const Metronome = () => {
  const { bpm, isPlaying, handlePlayStopPress } = useMetronome(6, 8, 80)

  return (
    <>
      <Text size={24} mb={12}>Metronome</Text>
      {/* <Text mb={12}>{count}</Text> */}
      <Button 
        onPress={handlePlayStopPress} 
        title={isPlaying ? 'Stop' : 'Start'} 
      />
    </>
  )
}

export default Metronome
