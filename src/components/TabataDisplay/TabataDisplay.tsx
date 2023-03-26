import View from '../View/View'
import Text from '../Text/Text'
import CircularProgress from '../CircularProgress/CircularProgress'
import { TabataDisplayProps } from './TabataDisplay.types'
import { STROKE_WIDTH } from './TabataDisplay.utils'

const TabataDisplay: React.FC<TabataDisplayProps> = ({ 
  size, 
  timeLeft, 
  totalTimeLeft, 
  isPlaying, 
  mode,
  round,
  totalRounds,
}) => (
  <>
    <View 
      w={size} 
      h={size}
      main='center'
      cross='center'
    >
      <View absolute>
        <CircularProgress 
          size={size} 
          duration={totalTimeLeft}
          color='blue'
          strokeWidth={8} 
          isPlaying={isPlaying}
        />
      </View>

      <View absolute>
        <CircularProgress 
          size={size - 10} 
          duration={timeLeft}
          color={mode === 'work' ? 'green' : 'red'}
          strokeWidth={STROKE_WIDTH} 
          isPlaying={isPlaying}
          mode={mode}
        />
      </View>

      <View main='center' cross='center'>
        <Text size={32}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</Text>
        <Text>Time: {timeLeft}s</Text>
        <Text>{round}/{totalRounds}</Text>
      </View>
    </View>
  </>
)

export default TabataDisplay
