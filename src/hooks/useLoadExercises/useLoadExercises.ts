import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { exerciseState, nextIdState } from '@state'
import { SecureStore } from '@helpers'

const EXERCISES_KEY = 'exercises'
const NEXT_ID_KEY = 'nextId'

export const useLoadExercises = () => {
  const [, setExercises] = useRecoilState(exerciseState)
  const [, setNextId] = useRecoilState(nextIdState)

  useEffect(() => {
    const loadExercises = async () => {
      const storedExercises = await SecureStore.find(EXERCISES_KEY)
      const storedNextId = await SecureStore.find(NEXT_ID_KEY)
      
      if (storedExercises && storedNextId) {
        setExercises(JSON.parse(storedExercises))
        setNextId(parseInt(storedNextId, 10))
      }
    }

    loadExercises()
  }, [])
}
