import { Text, Button, Scroll, Input, ModalCard } from '@components'
import { View } from 'react-native-rom-components'
import { GradientsType, InstrumentsType, deviceHeight } from '@styles'
import { useExercises, useNameValidation } from '@hooks'
import { useState } from 'react'
import { ColorPicker } from './ColorPicker/ColorPicker'
import { AddExerciseModalProps } from './AddExerciseModal.types'
import { WeaponPicker } from './WeaponPicker/WeaponPicker'

export const AddExerciseModal: React.FC<AddExerciseModalProps> = ({ onDismiss }) => {
  const { addExercise } = useExercises()
  const [exerciseBPM, setExerciseBPM] = useState(60)
  const [exerciseTimer, setExerciseTimer] = useState(0)
  const [exerciseColor, setExerciseColor] = useState<keyof GradientsType>('green')
  const [exerciseInstrument, setExerciseInstrument] = useState<InstrumentsType>('guitar')
  const { exerciseName, exerciseNameError, handleExerciseNameChange } = useNameValidation()

  return (
    <ModalCard onDismiss={onDismiss} >
      <Scroll h={deviceHeight*0.54} hideIndicator>
        <View row main='center' mb={12}>
          <Text size={24}>Create Exercise</Text>
        </View>

        <Input 
          value={exerciseName}
          onChangeText={handleExerciseNameChange}
          placeholder='Ex: Speed Burst'
          title='Name'
        />

        {exerciseNameError && <Text color='red1' mt={9}>{exerciseNameError}</Text>}

        <View mv={14} />

        <Input 
          value={`${exerciseBPM}`}
          onChangeText={(val) => setExerciseBPM(val as number)}
          placeholder='Ex: 150'
          title='BPMs'
          numeric
        />

        <View mv={14} />

        <Input 
          value={`${exerciseTimer}`}
          onChangeText={(val) => setExerciseTimer(val as number)}
          placeholder='20:00'
          title='Timer'
          timer
        />

        <View mv={14} />

        <ColorPicker 
          onColorSelected={(color) => setExerciseColor(color)} 
        />

        <View mv={14} />

        <WeaponPicker 
          onInstrumentSelected={(instrument) => setExerciseInstrument(instrument as InstrumentsType)} 
        />

        <View mv={14} />

      </Scroll>

      <View row main='center'>
        <Button 
          title='Create' 
          onPress={() => {
            if (exerciseName.trim() === '') {
              handleExerciseNameChange('')
            } else if (!exerciseNameError) { 
              addExercise({
                name: exerciseName,
                bpm: exerciseBPM,
                color: exerciseColor,
                instrument: exerciseInstrument,
                timer: exerciseTimer,
              })
              onDismiss()
            }
          }}          
        />
      </View>
    </ModalCard>
  )
}
