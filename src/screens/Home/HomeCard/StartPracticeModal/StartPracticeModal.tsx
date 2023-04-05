import { View,Text, Button } from '@components'
import { deviceWidth } from '@styles'
import { useNavigation } from '@hooks'
import { StartPracticeModalProps } from './StartPracticeModal.types'

export const StartPracticeModal: React.FC<StartPracticeModalProps> = ({ onDismiss, id, name, color }) => {
  const { navigate } = useNavigation()
  return (
    <View w={deviceWidth * 0.8} p={16} bgc='card' bw={2} bc='subtitle' s={1}>
      <View mb={12} cross='center'>
        <Text size={20} mb={8}>Start Practice Session</Text>
        <Text color='subtitle' mb={8}>{name}</Text>
        <Text>155 BPMs</Text>
      </View>
      <View row>
        <Button title='Cancel' onPress={onDismiss} w={134} />
        <View mh={4} />
        <Button 
          title='Start' 
          w={134} 
          color='red1' 
          onPress={() => {
            onDismiss()
            navigate('Workout', { id, name, color })
          }} 
        />
      </View>
    </View>
  )
}
