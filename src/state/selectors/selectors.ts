import { DefaultValue, selector } from 'recoil'
import { Exercise, exercisesState } from '../atoms/atoms'
import { SecureStore } from '@helpers'

export const addExerciseSelector = selector<Exercise | null>({
  key: 'updateExercises',
  get: () => null,
  set: ({ set }, newExercise) => {
    if (newExercise === null || newExercise instanceof DefaultValue) return
    set(exercisesState, (currentExercises) => {
      if (currentExercises instanceof DefaultValue) return [newExercise]
      const updatedExercises = [...currentExercises, newExercise]
      SecureStore.create('exercises', updatedExercises)
      return updatedExercises
    })
  },
})
