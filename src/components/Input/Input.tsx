import View from '../View/View'
import Text from '../Text/Text'
import { TextInput } from 'react-native'
import { InputProps } from './Input.types'

const Input: React.FC<InputProps> = ({
  value, 
  onChangeText, 
  placeholder = 'Ex: Speed Burst', 
  numeric = false, 
  title = '',
}) => (
  <View>
    <Text>{title}</Text>
    <TextInput
      value={value}
      textAlign='center'
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor='#ccc'
      underlineColorAndroid='transparent'
      keyboardType={numeric ? 'numeric' : 'default'}
      style={{
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontWeight: 'bold',
        color: 'white',
        width: '100%',
      }} />
  </View>
)

export default Input
