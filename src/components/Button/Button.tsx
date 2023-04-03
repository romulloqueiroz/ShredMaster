import { Pressable } from 'react-native'
import View from '../View/View'
import Text from '../Text/Text'
import Touchable from '../Touchable/Touchable'
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({ onPress, title, w = '100%' }) => {
  return (
    <Touchable onPress={onPress} w={w}>
      <View h={36} bw={2} bc='white' br={8} main='center' cross='center'>
        <Text>{title}</Text>
      </View>
    </Touchable>
  )
}

export default Button