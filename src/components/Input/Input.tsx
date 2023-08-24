import { View } from 'react-native-rom-components'
import Text from '../Text/Text'
import { TextInput } from 'react-native'
import { InputProps } from './Input.types'

const Input: React.FC<InputProps> = ({
  value, 
  onChangeText, 
  placeholder = 'Ex: Speed Burst', 
  numeric = false, 
  title = '',
}) => {
  const handleTextChange = (text: string) => {
    if (numeric) 
      if (/^\d*$/.test(text)) onChangeText(text)
    else onChangeText(text)
  }

  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        value={value}
        textAlign='center'
        onChangeText={handleTextChange}
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
}

export default Input
