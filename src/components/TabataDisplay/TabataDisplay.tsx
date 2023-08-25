import { memo } from 'react'
import { View } from 'react-native-rom-components'
import Text from '../Text/Text'
import CircularProgress from '../CircularProgress/legacy'
import { TabataDisplayProps } from './TabataDisplay.types'
import { STROKE_WIDTH } from './TabataDisplay.utils'
import { os } from '@styles'
import { getGradientColor, getModeColor, secondsToMinutes } from '@helpers'


const TabataDisplay: React.FC<TabataDisplayProps> = ({ 
  size, 
  sectionTime, 
  totalTime, 
  isPlaying, 
  mode,
  currentSeconds,
}) => {
  return (
    <View 
      w={size} 
      h={size}
      main='center'
      cross='center'
    >
      {/* <View absolute>
        <CircularProgress 
          size={size} 
          duration={os === 'ios' ? totalTime * 1.05 : totalTime * 1.1}
          color='blue'
          strokeWidth={8} 
          isPlaying={isPlaying}
        />
      </View> */}

      {/* <View absolute>
        <CircularProgress 
          size={size - 10} 
          duration={sectionTime}
          color={getGradientColor(mode)}
          strokeWidth={STROKE_WIDTH} 
          isPlaying={isPlaying}
          mode={mode}
        />
      </View> */}

      <View main='center' cross='center'>
        <Text 
          size={24} 
          color={getModeColor(mode)}
        >
          {mode.charAt(0).toUpperCase() + mode.slice(1)}
        </Text>
        <Text 
          mb={8}
          size={40} 
          color={getModeColor(mode)}
        >
          {secondsToMinutes(currentSeconds)}
        </Text>
        <Text>Total time</Text>
        <Text size={14} color='blue2'>{secondsToMinutes(totalTime)}</Text>
      </View>
    </View>
  )
}

export default memo(TabataDisplay)
