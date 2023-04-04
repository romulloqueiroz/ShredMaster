import { GradientsType, InstrumentsType } from '@styles'
import { atom } from 'recoil'

export type Exercise = {
  id: string
  name: string
  color: keyof GradientsType
  instrument: InstrumentsType
}

const exerciseState = atom<Exercise[]>({
  key: 'exerciseState',
  default: [],
})

export {
  exerciseState,
}
