import { Text, Button, Scroll, Input, ModalCard } from '@components'
import { View } from 'react-native-rom-components'
import { GradientsType, InstrumentsType, deviceHeight } from '@styles'
import { useExercises } from '@hooks'
import { useState } from 'react'
import { ColorPicker } from './ColorPicker/ColorPicker'
import { AddExerciseModalProps } from './AddExerciseModal.types'
import { WeaponPicker } from './WeaponPicker/WeaponPicker'

const tempTimer = 7

export const AddExerciseModal: React.FC<AddExerciseModalProps> = ({ onDismiss }) => {
  const { addExercise } = useExercises()
  const [exerciseName, setExerciseName] = useState('')
  const [exerciseBPM, setExerciseBPM] = useState(60)
  const [exerciseColor, setExerciseColor] = useState<keyof GradientsType>('green')
  const [exerciseInstrument, setExerciseInstrument] = useState<InstrumentsType>('guitar')
  // const [prepare, setPrepare] = useState(10)
  // const [work, setWork] = useState(10)
  // const [rest, setRest] = useState(10)
  // const [rounds, setRounds] = useState(10)

  return (
    <ModalCard onDismiss={onDismiss} >
      <Scroll h={deviceHeight*0.54}>
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

        {/* <Text>Tempo: 4/4</Text> */}

        <View mv={14} />

        <ColorPicker 
          onColorSelected={(color) => setExerciseColor(color)} 
        />

        <View mv={14} />

        <WeaponPicker 
          onInstrumentSelected={(instrument) => setExerciseInstrument(instrument as InstrumentsType)} 
        />

{/* 
        <View mv={14} />

        <View row main='center' mb={12}>
          <Text size={20}>Tabata</Text>
        </View>

        <Input
          value={`${prepare}`}
          onChangeText={(val) => setPrepare(val as number)}
          placeholder='Ex: 10s'
          title='Prepare'
          numeric
        />

        <View mv={14} />

        <Input
          value={`${work}`}
          onChangeText={(val) => setWork(val as number)}
          placeholder='Ex: 10s'
          title='Work'
          numeric
        />

        <View mv={14} />

        <Input
          value={`${rest}`}
          onChangeText={(val) => setRest(val as number)}
          placeholder='Ex: 10s'
          title='Rest'
          numeric
        />

        <View mv={14} />

        <Input
          value={`${rounds}`}
          onChangeText={(val) => setRounds(val as number)}
          placeholder='Ex: 10'
          title='Rounds'
          numeric
        />

        <View mv={14} /> */}

      </Scroll>

      <View row main='center'>
        <Button 
          title='Create' 
          onPress={() => {
            addExercise(
              exerciseName, 
              exerciseBPM, 
              exerciseColor, 
              exerciseInstrument,
              tempTimer,
              // prepare,
              // work,
              // rest,
              // rounds,
            )
            onDismiss()
          }} 
        />
      </View>
    </ModalCard>
  )
}
