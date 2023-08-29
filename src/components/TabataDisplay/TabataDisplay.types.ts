import { TabataMode } from "@helpers"

export interface TabataDisplayProps {
  size: number
  totalTime: number
  sectionTime?: number
  isPlaying?: boolean
  mode: TabataMode
  round?: number
  totalRounds: number
  currentSeconds: number
}
