import { View } from 'react-native-rom-components'
import Text from '../Text/Text'
import Touchable from '../Touchable/Touchable'
import { ButtonProps } from './Button.types'
import { ColorType } from '@styles'

const Button: React.FC<ButtonProps> = ({ onPress, title, w = '100%', color ='white' }) => (
  <Touchable onPress={onPress} w={w}>
    <View 
      h={36} 
      bw={2} 
      bc={color as keyof ColorType} 
      br={8} 
      main='center' 
      cross='center'
    >
      <Text color={color as keyof ColorType}>
        {title}
      </Text>
    </View>
  </Touchable>
)

export default Button
