import { memo, useMemo, useEffect } from 'react'
import { useTabata, useMetronome } from '@hooks'
import { BaseLayout } from '@layouts'
import { deviceWidth } from '@styles'
import { 
  View, 
  Text, 
  TabataDisplay,
  LinearProgress, 
  HeaderBack,
  PlayButton,
} from '@components'

const ROUNDS = 2

const Practice = () => {
  // const tabata = useTabata({ rounds: ROUNDS, workTime: 3, restTime: 3 })
  // const metronome = useMetronome(4, 4, 80)

  // useEffect(() => {
  //   if (tabata.mode === 'work' && !metronome.isPlaying && tabata.isRunning) {
  //     metronome.handlePlayStopPress()
  //   } else if (tabata.mode === 'rest' && metronome.isPlaying) {
  //     metronome.handlePlayStopPress()
  //   }
  // }, [tabata.mode, metronome.isPlaying, tabata.isRunning])

  const {
    currentPhase,
    currentRound,
    currentSeconds,
    sectionTime,
    isRunning,
    totalTime,
    toggle,
  } = useTabata({ prepare: 3, work: 5, rest: 5, rounds: 2 })

  const DISPLAY_SIZE = useMemo(() => deviceWidth * 0.7, [deviceWidth])

  return (
    <BaseLayout>
      <HeaderBack />
      <View 
        h='100%' 
        main='center' 
        cross='center' 
        flex1
      >
        <TabataDisplay 
          size={DISPLAY_SIZE}
          totalTime={totalTime}
          isPlaying={isRunning}
          sectionTime={sectionTime}
          mode={currentPhase}
          round={currentRound}
          totalRounds={ROUNDS}
          currentSeconds={currentSeconds}
        />

        <View 
          absolute
          rx={1}
          y={DISPLAY_SIZE - 56}
        >
          <PlayButton onPress={toggle} />
        </View>

        <View mv={24} />

        <View w='100%'>
          <Text mb={8}>Round {currentRound}/{ROUNDS}</Text>
          <LinearProgress  
            color='blue'
            width={deviceWidth * 0.4}
            progress={currentRound} 
            max={ROUNDS} 
          />
        </View>

      </View>
    </BaseLayout>
  )
}

export default memo(Practice)
