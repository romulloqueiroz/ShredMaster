import Text from '../Text/Text'
import View from '../View/View'
import Button from '../Button/Button'
import { useMetronome } from '@hooks'
import Slider from '@react-native-community/slider'

const Metronome = () => {
  const {
    isPlaying,
    bpm,
    timeSignatureNumerator,
    timeSignatureDenominator,
    togglePlay,
    handleChangeBPM,
    handleTimeSignatureNumerator,
    handleTimeSignatureDenominator,
  } = useMetronome();

  return (
    <>
      <Text size={24} mb={12}>Metronome</Text>


      <View>
        <Text>Metronome</Text>
        <Text>Time Signature: {timeSignatureNumerator}/{timeSignatureDenominator}</Text>
        <Slider
          value={timeSignatureNumerator}
          minimumValue={2}
          maximumValue={20}
          step={1}
          onValueChange={handleTimeSignatureNumerator}
        />
        <Slider
          value={timeSignatureDenominator}
          minimumValue={4}
          maximumValue={16}
          step={4}
          onValueChange={handleTimeSignatureDenominator}
        />
        <Text>BPM: {bpm}</Text>
        <Slider
          value={bpm}
          minimumValue={40}
          maximumValue={400}
          step={1}
          onValueChange={handleChangeBPM}
        />
        <Button onPress={togglePlay} title={isPlaying ? 'Stop' : 'Play'} />
      </View>
    </>
  )
}

export default Metronome
