import {
  Text,
  ModalCard,
  Input,
  Button,
} from '@components'
import { View } from 'react-native-rom-components'
import { useExercises, useNameValidation } from '@hooks'
import { useState, useEffect } from 'react'
import { EditModalProps } from './EditModal.types'

export const EditModal: React.FC<EditModalProps> = ({ 
  name, 
  id, 
  bpm, 
  timer,
  onDismiss, 
  setConfirmDeleteModal 
}) => {
  const { updateExercise } = useExercises()
  const { exerciseName, exerciseNameError, handleExerciseNameChange } = useNameValidation()
  useEffect(() => {       
    handleExerciseNameChange(name);
  }, [name]);
  const [exerciseBPM, setExerciseBPM] = useState(bpm)
  const [exerciseTimer, setExerciseTimer] = useState(timer)

  return (
    <ModalCard onDismiss={onDismiss}>
      
      <View row main='center' mb={12}>
        <Text size={24}>Update Exercise</Text>
      </View>

      <Input 
        value={exerciseName}
        onChangeText={handleExerciseNameChange}
        placeholder='Ex: Speed Burst'
        title='Name'
      />

      {exerciseNameError && <Text color='red1' mt={9}>{exerciseNameError}</Text>}

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
            if (exerciseName.trim() === '') {
              handleExerciseNameChange('')
            } else if (!exerciseNameError) { 
              onDismiss()
              updateExercise(id, { 
              newName: exerciseName, 
              newBpm: exerciseBPM,
              newTimer: exerciseTimer,
            })
          }}}
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
