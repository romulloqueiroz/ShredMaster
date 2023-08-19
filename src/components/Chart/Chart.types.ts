import { GradientsType } from '@styles'
import { Exercise } from '@state'

export type SectionByBPMList = [number, number][]

export interface ChartProps {
  color: keyof GradientsType
  name: string
  id: string
  onInteraction: (id: boolean) => void
  exercise: Exercise
}
