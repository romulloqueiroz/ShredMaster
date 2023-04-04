import { GradientsType, InstrumentsType } from '@styles'

export interface HomeCardProps {
  name: string
  color: keyof GradientsType
  instrument: InstrumentsType
}
