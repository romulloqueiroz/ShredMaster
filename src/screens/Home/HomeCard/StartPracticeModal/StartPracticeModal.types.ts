import { GradientsType } from "@styles"

export interface StartPracticeModalProps {
  onDismiss: () => void
  id: string
  name: string
  color: keyof GradientsType
}
