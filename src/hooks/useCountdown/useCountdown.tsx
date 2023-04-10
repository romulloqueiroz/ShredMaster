import { useState, useEffect } from 'react'

export const useCountdown = (prepareTime: number, workTime: number) => {
  const [isPreparing, setIsPreparing] = useState<boolean>(true)
  const [countdown, setCountdown] = useState<number>(prepareTime)
  const [totalTime] = useState<number>(prepareTime + workTime)
  const [currentTotalTime, setCurrentTotalTime] = useState<number>(prepareTime)
  const [flag, setFlag] = useState<'prepare' | 'work' | 'finished'>('prepare')
  const [isPaused, setIsPaused] = useState<boolean>(false)

  useEffect(() => {
    if (countdown === 0 || isPaused) return

    if (isPreparing) {
      setFlag('prepare')
      setCurrentTotalTime(prepareTime)
    } else {
      setFlag('work')
      setCurrentTotalTime(workTime)
    }

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [countdown, isPreparing, workTime, isPaused, prepareTime])

  useEffect(() => {
    if (countdown === 0) {
      if (isPreparing) {
        setIsPreparing(false)
        setFlag('work')
        setCountdown(workTime)
      } else {
        setFlag('finished')
      }
    }
  }, [countdown, isPreparing, workTime])

  const toggle = () => setIsPaused((prevIsPaused) => !prevIsPaused)

  return { countdown, totalTime, flag, toggle, currentTotalTime, isPaused }
}
