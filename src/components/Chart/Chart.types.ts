import { GradientsType } from '@styles'
import { Exercise } from '@state'

export type SectionByBPMList = [number, number][]

export interface ChartProps {
  color: keyof GradientsType
  name: string
  onInteraction: (id: boolean) => void
  exercise: Exercise
}
