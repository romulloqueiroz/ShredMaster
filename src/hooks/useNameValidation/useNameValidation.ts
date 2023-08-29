import { useState } from 'react'

export const useNameValidation = () => {
  const [exerciseName, setExerciseName] = useState('')
  const [exerciseNameError, setExerciseNameError] = useState<string | null>(null)

  const handleExerciseNameChange = (text: string | number) => {
    const stringValue = typeof text === 'number' ? text.toString() : text
    setExerciseName(stringValue)
    if (stringValue.trim() === '') {
      setExerciseNameError('Exercise name cannot be empty!')
    } else if (stringValue.length > 24) {
      setExerciseNameError('Exercise name cannot exceed 24 characters!')
    } else {
      setExerciseNameError(null)
    }
  }

  const clearExerciseNameError = () => setExerciseNameError(null)

  return {
    exerciseName,
    exerciseNameError,
    handleExerciseNameChange,
    clearExerciseNameError,
  }
}

