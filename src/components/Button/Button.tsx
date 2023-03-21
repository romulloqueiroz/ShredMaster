import { Pressable } from 'react-native'
import View from '../View/View'
import Text from '../Text/Text'
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress}>
      <View w={100} h={36} bw={2} bc='white' br={8} main='center' cross='center'>
        <Text>{title}</Text>
      </View>
    </Pressable>
  )
}

export default Button