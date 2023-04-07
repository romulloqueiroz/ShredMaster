import { View,Text, Button, ModalCard } from '@components'
import { useNavigation } from '@hooks'
import { StartPracticeModalProps } from './StartPracticeModal.types'

export const StartPracticeModal: React.FC<StartPracticeModalProps> = ({ 
  onDismiss, 
  id, 
  name, 
  bpm, 
  color,
  prepare, 
  work,
  rest,
  rounds,
}) => {
  const { navigate } = useNavigation()
  return (
    <ModalCard noCloseButton>
      <View mb={12} cross='center'>
        <Text size={20} mb={8}>Start Practice Session</Text>
        <Text color='subtitle' mb={8}>{name}</Text>
        <Text>{bpm} BPMs</Text>
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
            navigate('Workout', { id, name, bpm, color, prepare, work, rest, rounds })
          }} 
        />
      </View>
    </ModalCard>
  )
}
