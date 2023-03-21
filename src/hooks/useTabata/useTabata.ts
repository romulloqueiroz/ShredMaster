import { useState, useEffect } from 'react'
import { TabataTimerProps, TabataTimerResult } from './useTabata.types'

export const useTabata = ({ workTime, restTime, rounds }: TabataTimerProps): TabataTimerResult => {
  const [timeLeft, setTimeLeft] = useState(workTime)
  const [currentRound, setCurrentRound] = useState(1)
  const [isWorking, setIsWorking] = useState(true)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: any = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (timeLeft === 0) {
          setIsWorking((prevIsWorking) => !prevIsWorking);
          if (!isWorking) {
            if (currentRound === rounds) setIsRunning(false)
            else setCurrentRound((prevRound) => prevRound + 1)
          }
          setTimeLeft(!isWorking ? restTime : workTime);
        } else {
          setTimeLeft((prevTime) => prevTime - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, currentRound, isWorking, workTime, restTime, rounds]);

  const startTimer = () => {
    setIsRunning(true)
    setTimeLeft(workTime)
    setCurrentRound(1)
    setIsWorking(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
    setTimeLeft(workTime)
    setCurrentRound(1)
    setIsWorking(true)
  }

  return {
    timeLeft,
    currentRound,
    isWorking,
    isRunning,
    startTimer,
    stopTimer,
  }
}
