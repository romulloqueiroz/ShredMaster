import { ShredderName } from '../../../hooks/useStreak/useStreak'

export interface BodyProps {
  onDismiss: () => void
  currentStreak : number
  currentShredder : keyof ShredderName
}

