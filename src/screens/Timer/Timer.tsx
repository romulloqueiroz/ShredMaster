import { Text, HeaderBack, CircularProgress, Button, RoundButton } from '@components'
import { View } from 'react-native-rom-components'
import { useRoute, useCountdown, useNavigation, useExercises, useSimpleCountdown } from '@hooks'
import { BaseLayout } from '@layouts'
import { GradientsType, deviceWidth } from '@styles'
import { useMemo, useState, useEffect } from 'react'

const secondsToMinutes = (seconds: number) => new Date(seconds * 1000).toISOString().slice(14, 19)

const getModeColor = (mode: string) => {
  switch (mode) {
    case 'prepare':
      return 'yellow2'
    case 'work':
      return 'green2'
    case 'rest':
      return 'red2'
    case 'finished':
      return 'blue2'
    default:
      return 'blue2'
  }
}

const MAX_VALUE = 5
// const MAX_VALUE = 1800

const Timer = () => {
  const { updateExercise } = useExercises()
  const { navigate } = useNavigation()
  const [toggleRoundBtn, setToggleRoundBtn] = useState(true)
  const { params: { id, name, bpm, color, prepare, timer } } = useRoute<'Timer'>()
  const { countdown, toggle, isPaused, reset } = useSimpleCountdown(MAX_VALUE)
  // const { countdown, totalTime, flag, toggle, currentTotalTime } = useCountdown(5, 5) // prepare, timer

  const DISPLAY_SIZE = useMemo(() => deviceWidth * 0.7, [deviceWidth])

  // useEffect(() => {
  //   if (flag === 'finished') {
  //     updateExercise(id, { newSectionBpm: bpm})
  //     navigate('Root', { screen: 'Home' })
  //   }
  // }, [flag])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    if (countdown === 0) {
      timeoutId = setTimeout(() => {
        updateExercise(id, { newSectionBpm: bpm })
        navigate('Root', { screen: 'Home' })
      }, 1000)
    }

    return () => {
      if (timeoutId) { clearTimeout(timeoutId) }
    }
  }, [countdown])

  return (
    <BaseLayout>
      <HeaderBack />
      <View mb={12} />

      <View cross='center' mb={20}>
        <Text size={32} mb={8} color={`${color}1`}>
          {name}
        </Text>
        <Text>{bpm} bpms</Text>
      </View>

      <View cross='center'>
        <View 
          w={DISPLAY_SIZE} 
          h={DISPLAY_SIZE}
          main='center'
          cross='center'
        >
          <View absolute>
            {/* <CircularProgress 
              size={DISPLAY_SIZE - 10} 
              strokeWidth={18} 
              color={getModeColor(flag).slice(0, -1) as keyof GradientsType}
              mode={flag}
              maxValue={currentTotalTime - 1}
              currentValue={currentTotalTime - countdown}
            /> */}
            <CircularProgress 
              size={DISPLAY_SIZE} 
              strokeWidth={18} 
              color={getModeColor('work').slice(0, -1) as keyof GradientsType}
              maxValue={MAX_VALUE}
              currentValue={MAX_VALUE - countdown}
            />
          </View>

          <View main='center' cross='center'>
            <Text 
              size={24} 
              color={getModeColor('work')}
              // color={getModeColor(flag)}
            >
              {/* {flag.charAt(0).toUpperCase() + flag.slice(1)} */}
              Time Left
            </Text>
            <Text 
              mb={8}
              size={40} 
              color={getModeColor('work')}
              // color={getModeColor(flag)}
            >
              {secondsToMinutes(countdown)}
            </Text>
            {/* <Text>Total time</Text>
            <Text size={14} color='blue2'>{secondsToMinutes(totalTime)}</Text> */}
          </View>

        </View>
      </View>

      <View 
        absolute
        rx={1}
        y={DISPLAY_SIZE - 56}
      >
        <RoundButton 
          onPress={() => {
            toggle()
            setToggleRoundBtn(!toggleRoundBtn)
          }} 
          icon={toggleRoundBtn ? 'pause' : 'play'}
        />
      </View>

    </BaseLayout>
  )
}

export default Timer
