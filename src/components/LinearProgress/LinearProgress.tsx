import View from '../View/View'
import { colors } from '@styles'
import { addOpacity } from '@helpers'
import { LinearProgressProps } from './LinearProgress.types'

const LinearProgress: React.FC<LinearProgressProps> = ({ 
  progress, 
  min = 0, 
  max = 100,
  br = 12,
  width = 200,
  height = 14,
}) => {
  const perc = `${(progress / (max - min)) * 100}%`;

  return (
    <View 
      w={width} 
      h={height} 
      br={br} 
      style={{ backgroundColor: addOpacity(colors.red, 0.1) }}
    >
      <View
        w={perc}
        h='100%'
        br={br}
        bgc='red'
      />
    </View>
  )
}

export default LinearProgress
