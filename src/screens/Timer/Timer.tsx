import { View, Text, HeaderBack, CircularProgress } from '@components'
import { useRoute } from '@hooks'
import { BaseLayout } from '@layouts'
import { deviceWidth } from '@styles'
import { useMemo } from 'react'

const mode = 'work'

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
  const { params: { id, name, bpm, color, prepare, timer } } = useRoute<'Timer'>()

  const DISPLAY_SIZE = useMemo(() => deviceWidth * 0.7, [deviceWidth])

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
              duration={20}
              color='green'
              strokeWidth={18} 
              isPlaying={true}
            />
          </View>

          <View main='center' cross='center'>
          <Text 
            size={24} 
            color={getModeColor(mode)}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </Text>
          {/* <Text 
            mb={8}
            size={40} 
            color={getModeColor(mode)}
          >
            {secondsToMinutes(currentSeconds)}
          </Text> */}
          <Text>Total time</Text>
          <Text size={14} color='blue2'>{secondsToMinutes(20)}</Text>
        </View>
        </View>
      </View>
    </BaseLayout>
  )
}

export default Timer
