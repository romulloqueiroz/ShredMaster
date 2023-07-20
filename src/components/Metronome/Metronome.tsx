import Text from '../Text/Text'
import View from '../View/View'
import Button from '../Button/Button'
import CircularKnob from '../CircularKnob/CircularKnob2'
import { useMetronome } from '@hooks'
import Slider from '@react-native-community/slider'
import { useState } from 'react'

const Metronome = () => {
  const [value, setValue] = useState(0)
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

      <View mh={12} />

      <View bw={1} bc='red1' h={200} w={200}>
        <CircularKnob
          minValue={40} 
          maxValue={240}
          // onChange={setValue}
          // color='green'
          // strokeWidth={20}
          // minValue={20}
          // maxValue={400}
          onValueChange={(val: number) => setValue(val)}
        />
      </View>

      <Text>{value}</Text>
    </>
  )
}

export default Metronome
