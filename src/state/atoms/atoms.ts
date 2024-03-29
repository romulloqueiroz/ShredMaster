import { GradientsType, InstrumentsType } from '@styles'
import { atom } from 'recoil'

// Will be added later:
// prepare: number
// work: number
// rest: number
// rounds: number
export type Exercise = {
  id: string
  name: string
  bpm: number
  color: keyof GradientsType
  instrument: InstrumentsType
  timer: number
  sectionByBpm: [number, number][]
}

const exerciseState = atom<Exercise[]>({
  key: 'exerciseState',
  default: [],
})

const nextIdState = atom({
  key: 'nextIdState',
  default: 0,
})

const currentStreakState = atom({
  key: 'currentStreak',
  default: 0,
})

export {
  exerciseState,
  nextIdState,
  currentStreakState,
}
