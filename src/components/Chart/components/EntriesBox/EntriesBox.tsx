import { View } from 'react-native-rom-components'
import Text from '../../../Text/Text'
import { EntriesBoxProps } from './EntriesBox.types'

export const EntriesBox: React.FC<EntriesBoxProps> = ({ graphs, padding }) => {
  const number = graphs.xValues.length
  return (
    <View
      row
      ph={padding}
      pb={padding}
      main='space-between'
    >
      <Text size={12}>{number} entries</Text>
    </View>
  )
}