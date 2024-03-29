import { SecureStore } from '@helpers'
import { useRecoilState } from 'recoil'
import { exerciseState, nextIdState } from '@state'
import { GradientsType, InstrumentsType } from '@styles'

type Exercise = {
  id: string
  name: string
  color: keyof GradientsType
  instrument: InstrumentsType
  timer: number
}

const EXERCISES_KEY = 'exercises'
const NEXT_ID_KEY = 'nextId'

export const useExercises = () => {
  const [exercises, setExercises] = useRecoilState(exerciseState)
  const [nextId, setNextId] = useRecoilState(nextIdState)

  const saveExercises = async (newExercises: Exercise[], newNextId: number) => {
    await SecureStore.create(EXERCISES_KEY, JSON.stringify(newExercises))
    await SecureStore.create(NEXT_ID_KEY, newNextId.toString())
  }

  const addExercise = ({
    name, 
    bpm,
    color,
    instrument,
    timer,
    initialSectionByBpm = [],
  }: {
    name: string;
    bpm: number;
    color: keyof GradientsType;
    instrument: InstrumentsType;
    timer: number;
    initialSectionByBpm?: [number, number][];
  }) => {
    const newExercises = [
      ...exercises, 
      { 
        id: nextId.toString(), 
        name, 
        bpm, 
        color, 
        instrument,
        timer,
        sectionByBpm: initialSectionByBpm,
      }
    ]
    setExercises(newExercises)
    setNextId(nextId + 1)
    saveExercises(newExercises, nextId + 1)
  }

  const removeExercise = (id: string) => {
    const newExercises = exercises.filter((exercise) => exercise.id !== id)
    setExercises(newExercises)
    saveExercises(newExercises, nextId)
  }

  const updateExercise = (
    id: string,
    {
      newName,
      newBpm,
      newSectionBpm,
      newTimer,
    }: { 
      newName?: string, 
      newBpm?: number, 
      newSectionBpm?: number,
      newTimer?: number,
    }
  ) => {
    const newExercises = exercises.map((exercise) => {
      if (exercise.id === id) {
        const updatedExercise = {
          ...exercise,
          name: newName !== undefined ? newName : exercise.name,
          bpm: newBpm !== undefined ? newBpm : exercise.bpm,
          timer: newTimer !== undefined ? newTimer : exercise.timer,
        }
  
        if (newSectionBpm !== undefined) {
          updatedExercise.sectionByBpm = [
            ...exercise.sectionByBpm,
            [
              exercise.sectionByBpm.length,
              newSectionBpm,
            ],
          ]
        }
  
        return updatedExercise
      } else {
        return exercise
      }
    });

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
