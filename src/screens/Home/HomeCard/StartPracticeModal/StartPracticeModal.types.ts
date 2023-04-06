import { GradientsType } from "@styles"

export interface StartPracticeModalProps {
  onDismiss: () => void
  id: string
  name: string
  bpm: number
  color: keyof GradientsType
}
