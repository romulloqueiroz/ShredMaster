import { GradientsType, InstrumentsType } from '@styles'

export interface HomeCardProps {
  name: string
  bpm: number
  color: keyof GradientsType
  instrument: InstrumentsType
  id: string
}
