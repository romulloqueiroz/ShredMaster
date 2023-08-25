import { Text, Button, Scroll, Input, ModalCard } from '@components'
import { View } from 'react-native-rom-components'
import { GradientsType, InstrumentsType, deviceHeight } from '@styles'
import { useExercises } from '@hooks'
import { useState, useEffect } from 'react'
import { ColorPicker } from './ColorPicker/ColorPicker'
import { AddExerciseModalProps } from './AddExerciseModal.types'
import { WeaponPicker } from './WeaponPicker/WeaponPicker'

export const AddExerciseModal: React.FC<AddExerciseModalProps> = ({ onDismiss }) => {
  const { addExercise } = useExercises()
  const [exerciseName, setExerciseName] = useState('')
  const [exerciseBPM, setExerciseBPM] = useState(60)
  const [exerciseTimer, setExerciseTimer] = useState(0)
  const [exerciseColor, setExerciseColor] = useState<keyof GradientsType>('green')
  const [exerciseInstrument, setExerciseInstrument] = useState<InstrumentsType>('guitar')

  return (
    <ModalCard onDismiss={onDismiss} >
      <Scroll h={deviceHeight*0.54} hideIndicator>
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
            addExercise({
              name: exerciseName, 
              bpm : exerciseBPM, 
              color: exerciseColor, 
              instrument: exerciseInstrument,
              timer: exerciseTimer,
            })
            onDismiss()
          }} 
        />
      </View>
    </ModalCard>
  )
}
