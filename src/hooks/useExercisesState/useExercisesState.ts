import { useRecoilValue } from 'recoil'
import { exercisesState } from '@state'

export const useExercisesState = () => useRecoilValue(exercisesState)
