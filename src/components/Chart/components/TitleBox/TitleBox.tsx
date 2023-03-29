import View from '../../../View/View'
import Text from '../../../Text/Text'
import { TitleBoxProps } from './TitleBox.types'

export const TitleBox: React.FC<TitleBoxProps> = ({ padding }) => (
  <View
    row
    ph={padding}
    pt={padding}
    main='space-between'
  >
    <Text>Speed Burst</Text>
    <Text>BPM</Text>
  </View>
)
