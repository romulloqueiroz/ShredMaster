import { Text, Button, Scroll, Input, ModalCard } from '@components'
import { View } from 'react-native-rom-components'
import { GradientsType, InstrumentsType, deviceHeight } from '@styles'
import { useExercises } from '@hooks'
import { useState } from 'react'

export interface TimerEndModalProps {
  onDismiss: () => void
  id: string
  bpm: number
}

export const TimerEndModal: React.FC<TimerEndModalProps> = ({ onDismiss, id, bpm = 0 }) => {
  const { updateExercise } = useExercises()
  const [exerciseBPM, setExerciseBPM] = useState(bpm)

  return (
    <ModalCard onDismiss={onDismiss} >
      <Scroll>
        <Text mb={16}>
          Congratulations! You have completed the exercise.
        </Text>

        <Input 
          value={`${exerciseBPM}`}
          onChangeText={(val) => setExerciseBPM(val as number)}
          placeholder='Ex: 150'
          title='Update BPMs'
          numeric
        />

        <View row mt={18}>
          <Button 
            title='Keep Same' onPress={onDismiss} w={134} />
          <View mh={4} />
          <Button 
            title='Update' 
            w={134} 
            color='red1' 
            onPress={() => {
              onDismiss()
              updateExercise(id, { newBpm: exerciseBPM, newSectionBpm: exerciseBPM })
            }} 
          />
        </View>
      </Scroll>
    </ModalCard>
  )
}
