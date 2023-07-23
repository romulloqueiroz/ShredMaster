import { TouchableOpacity } from 'react-native'
import { View } from 'react-native-rom-components'
import { TouchableProps } from './Touchable.types'

const Touchable: React.FC<Partial<TouchableProps>> = ({
  children,
  onPress,
  disabled,
  opacity = 0.6,
  accessibilityRole = 'button',
  w,
  ...rest
}) => (
  <TouchableOpacity
    accessibilityRole={accessibilityRole}
    disabled={disabled}
    onPress={onPress}
    activeOpacity={opacity}
    style={{ ...(w && { width: w }) }}
  >
    <View {...{ ...rest }}>{children}</View>
  </TouchableOpacity>
)

export default Touchable
