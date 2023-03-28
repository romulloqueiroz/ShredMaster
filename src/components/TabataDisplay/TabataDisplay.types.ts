export interface TabataDisplayProps {
  size: number
  totalTime: number
  sectionTime?: number
  isPlaying?: boolean
  mode: 'work' | 'rest' | 'prepare' | 'finished'
  round?: number
  totalRounds: number
  currentSeconds: number
}
