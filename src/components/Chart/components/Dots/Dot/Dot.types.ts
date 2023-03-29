import { GradientsType } from "@styles"

export interface DotProps {
  x: number
  y: number
  width: number
  gradientColor: keyof GradientsType
}
