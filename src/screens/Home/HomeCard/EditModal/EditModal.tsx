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

  return (
    <>
      <ModalCard noCloseButton>

        <Input 
          value={exerciseName}
          onChangeText={(text) => setExerciseName(text as string)}
          placeholder='Ex: Speed Burst'
          title='Update name'
        />

        <View row mt={18}>
          <Button title='Cancel' onPress={onDismiss} w={134} />
          <View mh={4} />
          <Button 
            title='Update' 
            w={134} 
            color='red1' 
            onPress={() => {
              onDismiss()
              updateExercise(id, { newName: exerciseName })
            }} 
          />
        </View>

        <View h={1} bw={1} bc='glass2' mv={32} />

        <Input 
          value={`${exerciseBPM}`}
          onChangeText={(val) => setExerciseBPM(val as number)}
          placeholder='Ex: 150'
          title='Update BPMs'
          numeric
        />

        <View row mt={18}>
          <Button title='Cancel' onPress={onDismiss} w={134} />
          <View mh={4} />
          <Button 
            title='Update' 
            w={134} 
            color='red1' 
            onPress={() => {
              onDismiss()
              updateExercise(id, { newBpm: exerciseBPM })
            }} 
          />
        </View>

        <View h={1} bw={1} bc='glass2' mv={32} />

        <Text mb={14}>Delete Exercise</Text>

        <View row>
          <Button title='Cancel' onPress={onDismiss} w={134} />
          <View mh={4} />
          <Button 
            title='Delete' 
            w={134} 
            color='red1' 
            onPress={() => {
              onDismiss()
              setConfirmDeleteModal(true)
            }} 
          />
        </View>
      </ModalCard>
    </>
  )
}
