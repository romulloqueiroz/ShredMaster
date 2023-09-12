import { Text, HeaderBack, CircularProgress, PopupModal, RoundButton } from '@components'
import { View } from 'react-native-rom-components'
import { 
  useRoute, 
  useNavigation, 
  useExercises, 
  useSimpleCountdown,
  useStreak,
  useSuccessSound,
} from '@hooks'
import { getModeColor } from '@helpers'
import { BaseLayout } from '@layouts'
import { GradientsType, deviceWidth } from '@styles'
import { useMemo, useState, useEffect } from 'react'
import { TimerEndModal } from './TimerEndModal/TimerEndModal'

const secondsToMinutes = (seconds: number) => new Date(seconds * 1000).toISOString().slice(14, 19)

const Timer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { updateExercise, exercises } = useExercises()
  const { navigate } = useNavigation()
  const [toggleRoundBtn, setToggleRoundBtn] = useState(true)
  const { updateStreak } = useStreak()
  const { params: { 
    id, 
    name, 
    bpm, 
    color, 
    timer,
    // prepare, 
  } } = useRoute<'Timer'>()
  const { 
    countdown, 
    toggle, 
    // isPaused, 
    // reset 
  } = useSimpleCountdown(timer)
  const playSuccessSound = useSuccessSound()
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
        setIsVisible(true)
        playSuccessSound()
        updateStreak()
      }, 1000)
    }

    return () => {
      if (timeoutId) { clearTimeout(timeoutId) }
    }
  }, [countdown])

  const handleDismiss = () => {
    setIsVisible(false)
    navigate('Root', { screen: 'Home' })
  }

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
              maxValue={timer}
              currentValue={timer - countdown}
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

      <PopupModal 
        isVisible={isVisible} 
        onDismiss={() => {
          updateExercise(id, { newSectionBpm: bpm })
          handleDismiss()
        }}
      >
        <TimerEndModal 
          onDismiss={handleDismiss} 
          id={id}
          bpm={bpm}
        />
      </PopupModal>

    </BaseLayout>
  )
}

export default Timer
