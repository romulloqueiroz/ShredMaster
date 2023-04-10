import { View, Text, HeaderBack, CircularProgress, Button, RoundButton } from '@components'
import { useRoute, useCountdown, useNavigation } from '@hooks'
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

const Timer = () => {
  const { navigate } = useNavigation()
  const [toggleRoundBtn, setToggleRoundBtn] = useState(true)
  const { params: { id, name, bpm, color, prepare, timer } } = useRoute<'Timer'>()
  const { countdown, totalTime, flag, toggle, currentTotalTime, isPaused } = useCountdown(prepare, timer)

  const DISPLAY_SIZE = useMemo(() => deviceWidth * 0.7, [deviceWidth])

  useEffect(() => {
    if (flag === 'finished') {
      navigate('Root', { screen: 'Home' })
    }
  }, [flag])

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
            <CircularProgress 
              size={DISPLAY_SIZE - 10} 
              duration={currentTotalTime}
              color={getModeColor(flag).slice(0, -1) as keyof GradientsType}
              strokeWidth={18} 
              isPlaying={!isPaused}
            />
          </View>

          <View main='center' cross='center'>
          <Text 
            size={24} 
            color={getModeColor(flag)}
          >
            {flag.charAt(0).toUpperCase() + flag.slice(1)}
          </Text>
          <Text 
            mb={8}
            size={40} 
            color={getModeColor(flag)}
          >
            {secondsToMinutes(countdown)}
          </Text>
          <Text>Total time</Text>
          <Text size={14} color='blue2'>{secondsToMinutes(totalTime)}</Text>
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
