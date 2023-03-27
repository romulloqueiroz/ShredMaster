export interface TabataDisplayProps {
  size: number;
  totalTime: number;
  sectionTime?: number;
  isPlaying?: boolean;
  mode: string;
  round?: number;
  totalRounds: number;
  currentSeconds: number;
}
