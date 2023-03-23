import { useTabata } from '@hooks'
import View from '../View/View'
import Text from '../Text/Text'
import Button from '../Button/Button'
import { 
  Canvas, 
  Path, 
  Skia, 
  useLoop,
  useComputedValue,
  mix,
  useValue,
  Group, 
} from '@shopify/react-native-skia'

const r1 = 85
const path = Skia.Path.Make()
path.addCircle(12 + r1, 12 + r1, r1)


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

  const t = useLoop({ duration: 3000 })
  const x = useComputedValue(() => mix(t.current, 0, 180), [t])
  const progress = useComputedValue(() => x.current / 192, [x])

  return (
    <>
      <Text>Time Left: {timeLeft}</Text>
      <Text>Current Round: {currentRound}</Text>
      <Text mb={32}>Is Working: {isWorking ? 'Play' : 'Rest'}</Text>

      <View w={194} h={194} bw={1} bc='aqua'>
        <Canvas style={{ flex: 1 }}>
          <Group>
            <Path
              path={path}
              style='stroke'
              strokeWidth={12}
              color='red'
              end={progress}
              strokeCap='round'
            />
          </Group>
        </Canvas>
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
