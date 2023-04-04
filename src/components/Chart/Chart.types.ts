import { GradientsType } from '@styles'

export type SectionByBPMList = [number, number][]

export interface ChartProps {
  color: keyof GradientsType
  name: string
}
