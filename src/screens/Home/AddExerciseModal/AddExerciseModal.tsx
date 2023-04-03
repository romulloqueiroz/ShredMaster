import { View, Text, Button } from '@components'
import { deviceWidth } from '@styles'
import { useExercises } from '@hooks'
import { useState } from 'react'
import { TextInput } from 'react-native'

interface AddExerciseModalProps {
  onDismiss: () => void
}

export const AddExerciseModal: React.FC<AddExerciseModalProps> = ({ onDismiss }) => {
  const { addExercise } = useExercises()
  const [exerciseName, setExerciseName] = useState('')

  return (
    <View
      w={deviceWidth - 64}
      bgc='card'
      br={4}
      p={16}
    >
      <View row main='center' mb={12}>
        <Text size={24}>Create Exercise</Text>
      </View>
      <Text>Name: Speed Burst</Text>
      <Text>Tempo: 4/4</Text>
      <Text>BPM: 150</Text>

      <TextInput
        value={exerciseName}
        onChangeText={setExerciseName}
        placeholder="Exercise name"
      />
  
      <View row main='center'>
        <Button title='Create' onPress={() => {
          addExercise(exerciseName)
          onDismiss()
        }} />
      </View>
    </View>
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