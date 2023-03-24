import { useState, useEffect } from 'react'
import { TabataTimerProps } from './useTabata.types'

export const useTabata = ({ workTime, restTime, rounds }: TabataTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(workTime)
  const [currentRound, setCurrentRound] = useState(1)
  const [mode, setMode] = useState<'work' | 'rest'>('work')
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: any = null
  
    if (isRunning) {
      interval = setInterval(() => {
        if (timeLeft === 1) {
          setIsRunning(false)
          setMode((prevMode) => {
            const isLastRound = prevMode === 'rest' && currentRound === rounds
            if (isLastRound) {
              setIsRunning(false)
              return prevMode
            } else {
              return prevMode === 'work' ? 'rest' : 'work'
            }
          })
          
          setTimeLeft(mode === 'work' ? workTime : restTime)
          setTimeout(() => {
            setIsRunning(true)
            if (mode === 'rest') {
              if (currentRound === rounds) setIsRunning(false)
              else setCurrentRound((prevRound) => prevRound + 1)
            }
          }, 1000)
        } else {
          setTimeLeft((prevTime) => prevTime - 1)
        }
      }, 1000)
    }
  
    return () => clearInterval(interval)
  }, [isRunning, timeLeft, currentRound, mode, workTime, restTime, rounds])
  
  const startTimer = () => {
    setIsRunning(true)
    setTimeLeft(workTime)
    setCurrentRound(1)
    setMode('work')
  }

  const stopTimer = () => {
    setIsRunning(false)
    setTimeLeft(workTime)
    setCurrentRound(1)
    setMode('work')
  }

  return {
    timeLeft,
    currentRound,
    mode,
    isRunning,
    startTimer,
    stopTimer,
  }
}
