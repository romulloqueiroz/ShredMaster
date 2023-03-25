import { AccessibilityRole, TouchableOpacity } from 'react-native'
import { ViewType } from '@styles'
import View from '../View/View'

interface TouchableProps extends ViewType {
  opacity: number
  onPress: () => void
  disabled?: boolean
  accessibilityRole?: AccessibilityRole
}

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
