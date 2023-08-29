import {
  Text,
  ModalCard,
  Input,
  Button,
} from '@components'
import { View } from 'react-native-rom-components'
import { useExercises } from '@hooks'
import { useState } from 'react'
import { EditModalProps } from './EditModal.types'

export const EditModal: React.FC<EditModalProps> = ({ 
  name, 
  id, 
  bpm, 
  onDismiss, 
  setConfirmDeleteModal 
}) => {
  const { updateExercise } = useExercises()
  const [exerciseName, setExerciseName] = useState(name)
  const [exerciseBPM, setExerciseBPM] = useState(bpm)
  const [exerciseTimer, setExerciseTimer] = useState(0)

  return (
    <ModalCard onDismiss={onDismiss}>
      
      <View row main='center' mb={12}>
        <Text size={24}>Update Exercise</Text>
      </View>

      <Input 
        value={exerciseName}
        onChangeText={(text) => setExerciseName(text as string)}
        placeholder='Ex: Speed Burst'
        title='Name'
      />

      <View mv={9} />

      <Input 
        value={`${exerciseBPM}`}
        onChangeText={(val) => setExerciseBPM(val as number)}
        placeholder='Ex: 150'
        title='BPMs'
        numeric
      />

      <View mv={9} />

      <Input 
        value={`${exerciseTimer}`}
        onChangeText={(val) => setExerciseTimer(val as number)}
        placeholder='20:00'
        title='Timer'
        timer
      />

      <View row mt={18}>
        <Button title='Cancel' onPress={onDismiss} w={134} />
        <View mh={4} />
        <Button 
          title='Update' 
          w={134} 
          color='green1' 
          onPress={() => {
            onDismiss()
            updateExercise(id, { 
              newName: exerciseName, 
              newBpm: exerciseBPM,
              newTimer: exerciseTimer,
            })
          }} 
        />
      </View>

      <View h={1} bw={1} bc='glass2' mv={32} />

      <Text mb={14}>Delete Exercise</Text>

      <View row>
        <Button 
          title='Delete' 
          w={268} 
          color='red1' 
          onPress={() => {
            onDismiss()
            setConfirmDeleteModal(true)
          }} 
        />
      </View>
      
    </ModalCard>
  )
}
