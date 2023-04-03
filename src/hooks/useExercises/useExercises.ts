import { useState, useEffect } from 'react'
import { SecureStore } from '@helpers'
import { useRecoilState } from 'recoil'
import { exerciseState } from '@state'

type Exercise = {
  id: string
  name: string
}

const EXERCISES_KEY = 'exercises'
const NEXT_ID_KEY = 'nextId'

export const useExercises = () => {
  const [exercises, setExercises] = useRecoilState(exerciseState)
  const [nextId, setNextId] = useState(0)

  const loadExercises = async () => {
    const storedExercises = await SecureStore.find(EXERCISES_KEY)
    const storedNextId = await SecureStore.find(NEXT_ID_KEY)

    if (storedExercises && storedNextId) {
      setExercises(JSON.parse(storedExercises))
      setNextId(parseInt(storedNextId, 10))
    }
  }

  useEffect(() => {
    loadExercises()
  }, [])

  const saveExercises = async (newExercises: Exercise[], newNextId: number) => {
    await SecureStore.create(EXERCISES_KEY, JSON.stringify(newExercises))
    await SecureStore.create(NEXT_ID_KEY, newNextId.toString())
  }

  const addExercise = (name: string) => {
    const newExercises = [...exercises, { id: nextId.toString(), name }]
    setExercises(newExercises)
    setNextId(nextId + 1)
    saveExercises(newExercises, nextId + 1)
  }

  const removeExercise = (id: string) => {
    const newExercises = exercises.filter((exercise) => exercise.id !== id)
    setExercises(newExercises)
    saveExercises(newExercises, nextId)
  }

  const updateExercise = (id: string, newName: string) => {
    const newExercises = exercises.map((exercise) =>
      exercise.id === id ? { ...exercise, name: newName } : exercise,
    )
    setExercises(newExercises)
    saveExercises(newExercises, nextId)
  }

  const resetExercises = async () => {
    await SecureStore.remove(EXERCISES_KEY)
    await SecureStore.remove(NEXT_ID_KEY)
    setExercises([])
    setNextId(0)
  }

  return { exercises, addExercise, removeExercise, updateExercise, resetExercises }
}