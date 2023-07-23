import { View } from 'react-native-rom-components'
import Text from '../../Text/Text'
import Icon from '../../Icon/Icon'
import { NavigatorIconProps } from './NavigatorIcon.types'

const NavigatorIcon: React.FC<Partial<NavigatorIconProps>> = ({ title, icon, active }) => (
  <View cross='center'>
    <Icon name={icon} color={active ? 'white' : 'glass3'} />
    <View mb={6} />
    <Text color={active ? 'white' : 'subtitle'} lineHeight='dense' size={10}>
      {title}
    </Text>
  </View>
)

export default NavigatorIcon
