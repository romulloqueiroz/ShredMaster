import { Text, Button, ModalCard } from '@components'
import { View } from 'react-native-rom-components'
import { 
  // useNavigation, 
  useExercises 
} from '@hooks'
import { StartPracticeModalProps } from './StartPracticeModal.types'

// const tempMode = 'Timer'
// const tempTimer = 30

// Will be added later
// prepare, 
// work,
// rest,
// rounds,
export const StartPracticeModal: React.FC<StartPracticeModalProps> = ({ 
  onDismiss, 
  id, 
  name, 
  bpm, 
  color,
}) => {
  // const tempParams = {
  //   id,
  //   name,
  //   bpm,
  //   color,
  //   timer: tempTimer,
  // }
  // const { navigate } = useNavigation()
  const { updateExercise } = useExercises()
  return (
    <ModalCard noCloseButton>
      <View mb={12} cross='center'>
        <Text size={20} mb={8}>Start Practice Session</Text>
        {/* <Text size={20} mb={8}>Add entry</Text> */}
        <Text color='subtitle' mb={8}>{name}</Text>
        <Text>{bpm} BPMs</Text>
      </View>
      <View row>
        <Button 
          // title='No' 
          title='Cancel' 
          onPress={onDismiss} 
          w={134} 
        />
        <View mh={4} />
        <Button 
          title='Yes' 
          // title='Start' 
          w={134} 
          color='red1' 
          onPress={() => {
            onDismiss()
            // navigate(tempMode, tempParams)
            updateExercise(id, { newSectionBpm: bpm})
          }} 
        />
      </View>
    </ModalCard>
  )
}
