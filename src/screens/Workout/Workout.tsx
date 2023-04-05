import { BaseLayout } from '@layouts'
import { deviceWidth } from '@styles'
import { useTabata, useRoute } from '@hooks'
import { memo, useMemo, useEffect, useState } from 'react'
import { 
  View, 
  Text, 
  TabataDisplay,
  LinearProgress, 
  HeaderBack,
  RoundButton,
} from '@components'

const ROUNDS = 3

const Practice = () => {
  const { params: { id, name, color } } = useRoute<'Workout'>()
  const [toggleRoundBtn, setToggleRoundBtn] = useState(true)

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
    currentTabata,
    currentPhase,
    currentRound,
    currentSeconds,
    sectionTime,
    isRunning,
    totalTime,
    toggle,
  } = useTabata({ prepare: 5, work: 5, rest: 5, rounds: ROUNDS })

  const DISPLAY_SIZE = useMemo(() => deviceWidth * 0.7, [deviceWidth])

  return (
    <BaseLayout>
      <HeaderBack />
      <View mb={12} />

      <View row main='center' mb={12}>
        <Text size={32} mb={8} color={`${color}1`}>
          {name}
        </Text>
      </View>

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
          <RoundButton 
            onPress={() => {
              toggle()
              setToggleRoundBtn(!toggleRoundBtn)
            }} 
            icon={toggleRoundBtn ? 'pause' : 'play'}
          />
        </View>

        <View mv={24} />

        <View w='100%'>
          <Text mb={8}>Round {currentRound}/{ROUNDS}</Text>
          <LinearProgress  
            color='blue2'
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
