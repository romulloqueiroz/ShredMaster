import { View } from 'react-native-rom-components'
import Text from '../Text/Text'
import { TextInput } from 'react-native'
import { InputProps } from './Input.types'
import { useEffect, useState } from 'react'
import { secondsToMinutes } from '@helpers'

const minutesToSeconds = (minutes: number, seconds: number) => {
  return minutes * 60 + seconds
}


const Input: React.FC<InputProps> = ({
  value, 
  onChangeText, 
  placeholder = 'Ex: Speed Burst', 
  numeric = false, 
  timer = false,
  title = '',
}) => {
  const [rawInput, setRawInput] = useState<string>('')

  const handleTextChange = (text: string) => {
    if (timer) {
      const formattedText = text.replace(/[^0-9]/g, '').substring(0, 4)
      const minutes = formattedText.substring(0, 2)
      const seconds = formattedText.substring(2, 4)
      const totalSeconds = minutesToSeconds(parseInt(minutes), parseInt(seconds))
      setRawInput(`${minutes}:${seconds}`)
      onChangeText(totalSeconds.toString())
    } else if (numeric) {
      if (/^\d*$/.test(text)) onChangeText(text)
    } else {
      onChangeText(text)
    }
}

useEffect(() => {
    if (timer) {
      const timerValue = secondsToMinutes(Number(value))
      setRawInput(timerValue)
    }
}, [value])


  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        value={timer ? rawInput : value}
        textAlign='center'
        onChangeText={handleTextChange}
        placeholder={timer ? 'MM:SS' : placeholder}
        placeholderTextColor='#ccc'
        underlineColorAndroid='transparent'
        keyboardType={numeric || timer ? 'numeric' : 'default'}
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
