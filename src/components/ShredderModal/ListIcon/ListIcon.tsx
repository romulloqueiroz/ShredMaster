import View from '../../View/View'
import Text from '../../Text/Text'
import Shredder from '../../Shredder/Shredder'
import { ListIconProps } from './ListIcon.types'

export const ListIcon: React.FC<ListIconProps> = ({ name, title, desc }) => (
  <View h={56} mb={8} row>
    <Shredder size={56} name={name} />
    <View ml={8} main='space-between' pv={8}>
      <Text color='white'>
        {title}
      </Text>
      <Text color='subtitle'>
        {desc}
      </Text>
    </View>
  </View>
)
