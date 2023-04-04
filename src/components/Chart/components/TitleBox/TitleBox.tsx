import View from '../../../View/View'
import Text from '../../../Text/Text'
import { TitleBoxProps } from './TitleBox.types'

export const TitleBox: React.FC<TitleBoxProps> = ({ padding, name, color }) => (
  <View
    row
    ph={padding}
    pt={padding}
    main='space-between'
    cross='flex-end'
  >
    <Text size={18} color={`${color}1`}>{name}</Text>
    <Text>BPM</Text>
  </View>
)
