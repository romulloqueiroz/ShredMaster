import { View, Text, Button, Scroll, Input, ModalCard } from '@components'
import { GradientsType, InstrumentsType, deviceHeight } from '@styles'
import { useExercises } from '@hooks'
import { useState } from 'react'
import { ColorPicker } from './ColorPicker/ColorPicker'
import { AddExerciseModalProps } from './AddExerciseModal.types'
import { WeaponPicker } from './WeaponPicker/WeaponPicker'

export const AddExerciseModal: React.FC<AddExerciseModalProps> = ({ onDismiss }) => {
  const { addExercise } = useExercises()
  const [exerciseName, setExerciseName] = useState('')
  const [exerciseBPM, setExerciseBPM] = useState(60)
  const [exerciseColor, setExerciseColor] = useState<keyof GradientsType>('green')
  const [exerciseInstrument, setExerciseInstrument] = useState<InstrumentsType>('guitar')

  return (
    <ModalCard onDismiss={onDismiss} >
      <Scroll hideIndicator h={deviceHeight*0.54}>
        <View row main='center' mb={12}>
          <Text size={24}>Create Exercise</Text>
        </View>

        <Input 
          value={exerciseName}
          onChangeText={(text) => setExerciseName(text as string)}
          placeholder='Ex: Speed Burst'
          title='Name'
        />

        <View mv={14} />

        <Input 
          value={`${exerciseBPM}`}
          onChangeText={(val) => setExerciseBPM(val as number)}
          placeholder='Ex: 150'
          title='BPMs'
          numeric
        />

        <View mv={14} />

        <Text>Tempo: 4/4</Text>

        <View mv={14} />

        <ColorPicker 
          onColorSelected={(color) => setExerciseColor(color)} 
        />

        <View mv={14} />

        <WeaponPicker 
          onInstrumentSelected={(instrument) => setExerciseInstrument(instrument as InstrumentsType)} 
        />

      </Scroll>

      <View row main='center'>
        <Button 
          title='Create' 
          onPress={() => {
            addExercise(exerciseName, exerciseBPM, exerciseColor, exerciseInstrument)
            onDismiss()
          }} 
        />
      </View>
    </ModalCard>
  )
}





// const removeExercise = (id: string) => {
//   setExercises(exercises.filter((exercise) => exercise.id !== id))
// }

// const updateExercise = (id: string, newName: string) => {
//   setExercises(
//     exercises.map((exercise) =>
//       exercise.id === id ? { ...exercise, name: newName } : exercise,
//     ),
//   )
// }