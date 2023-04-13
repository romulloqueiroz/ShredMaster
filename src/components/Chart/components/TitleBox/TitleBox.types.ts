import { GradientsType } from '@styles'

export interface TitleBoxProps {
  padding: number
  name: string
  color: keyof GradientsType
  bpm: number | null
}
