export interface TabataDisplayProps {
  size: number;
  totalTimeLeft?: number;
  timeLeft?: number;
  isPlaying?: boolean;
  mode: 'work' | 'rest';
  round?: number;
  totalRounds: number;
}
