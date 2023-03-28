import { memo } from 'react'
import View from '../View/View'
import Text from '../Text/Text'
import CircularProgress from '../CircularProgress/CircularProgress'
import { TabataDisplayProps } from './TabataDisplay.types'
import { STROKE_WIDTH } from './TabataDisplay.utils'

const getModeColor = (mode: string) => {
  switch (mode) {
    case 'prepare':
      return 'yellow'
    case 'work':
      return 'green'
    case 'rest':
      return 'red'
    case 'finished':
      return 'blue'
    default:
      return 'blue'
  }
}

const TabataDisplay: React.FC<TabataDisplayProps> = ({ 
  size, 
  sectionTime, 
  totalTime, 
  isPlaying, 
  mode,
  round,
  totalRounds,
  currentSeconds,
}) => {
  return (
    <View 
      w={size} 
      h={size}
      main='center'
      cross='center'
    >
      <View absolute>
        <CircularProgress 
          size={size} 
          duration={totalTime * 1.05}
          color='blue'
          strokeWidth={8} 
          isPlaying={isPlaying}
        />
      </View>

      <View absolute>
        <CircularProgress 
          size={size - 10} 
          duration={sectionTime}
          color={getModeColor(mode)}
          strokeWidth={STROKE_WIDTH} 
          isPlaying={isPlaying}
          mode={mode}
        />
      </View>

      <View main='center' cross='center'>
        <Text size={32}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</Text>
        <Text>Time: {currentSeconds}s</Text>
        <Text>{round}/{totalRounds}</Text>
      </View>
    </View>
  )
}

export default memo(TabataDisplay)
