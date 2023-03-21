export interface TabataTimerProps {
  workTime: number;
  restTime: number;
  rounds: number;
}

export interface TabataTimerResult {
  timeLeft: number;
  currentRound: number;
  isWorking: boolean;
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
}
