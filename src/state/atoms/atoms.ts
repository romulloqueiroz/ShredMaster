import { atom } from 'recoil'

export type Exercise = {
  id: string
  name: string
}

const exerciseState = atom<Exercise[]>({
  key: 'exerciseState',
  default: [],
})

export {
  exerciseState,
}
