import { useState, useEffect } from 'react'
import { useTabataProps } from './useTabata.types'

export const useTabata = (initialTabataState: useTabataProps) => {
  const [initialTabata, setInitialTabata] = useState(initialTabataState)
  const [currentTabata, setCurrentTabata] = useState(initialTabata)
  const [isRunning, setIsRunning] = useState(false)
  const [currentSeconds, setCurrentSeconds] = useState(currentTabata.prepare)
  const [sectionTime, setSectionTime] = useState(currentTabata.prepare)
  const [currentRound, setCurrentRound] = useState(1)
  const [currentPhase, setCurrentPhase] = useState('prepare')
  const [totalTime, setTotalTime] = useState(0)
  const [pausePhase, setPausePhase] = useState(false)

  useEffect(() => {
    if (!isRunning || currentPhase === 'finished') return
    if (pausePhase) return
  
    const { work, rest } = currentTabata
  
    const timer = setTimeout(() => {
      if (currentPhase === 'prepare') {
        setCurrentSeconds(prevSeconds => prevSeconds - 1)
        if (currentSeconds === 1) {
          setCurrentPhase('work')
          setCurrentSeconds(work)
          setSectionTime(work)
        }
      } else if (currentPhase === 'work' && currentSeconds > 1) {
        setCurrentSeconds(prevSeconds => prevSeconds - 1)
      } else if (currentPhase === 'work' && currentSeconds === 1) {
        setPausePhase(true)
        setIsRunning(false)
        setCurrentPhase('rest')
        setCurrentSeconds(rest)
        setSectionTime(rest)
        setIsRunning(true)
        setPausePhase(false)
      } else if (currentPhase === 'rest' && currentSeconds > 1) {
        setCurrentSeconds(prevSeconds => prevSeconds - 1)
      } else if (currentPhase === 'rest' && currentSeconds === 1) {
        setPausePhase(true)
        setIsRunning(false)
        setCurrentPhase('work')
        setCurrentRound(prevRound => prevRound + 1)
        setCurrentSeconds(work)
        setSectionTime(work)
        setIsRunning(true)
        setPausePhase(false)
      }
    }, 1000)
  
    return () => clearTimeout(timer)
  }, [isRunning, currentTabata, currentPhase, currentSeconds, pausePhase])
  
  useEffect(() => {
    if (currentRound > currentTabata.rounds) {
      setIsRunning(false)
      setCurrentPhase('finished')
      setCurrentSeconds(0)
      setCurrentRound(1)
      setCurrentTabata(initialTabataState)
    }
  }, [currentRound, currentTabata, initialTabataState])

  const toggle = () => setIsRunning(prevIsRunning => !prevIsRunning)

  const reset = () => {
    setIsRunning(false)
    setCurrentPhase('prepare')
    setCurrentSeconds(currentTabata.prepare)
    setCurrentRound(1)
    setCurrentTabata(initialTabataState)
  }

  const handleTabataChange = ({ name, value }: { name: keyof useTabataProps, value: number }) => {
    const newTabata = {
      ...currentTabata,
      [name]: value,
    }
    setCurrentTabata(newTabata)
    setInitialTabata(newTabata)
    calculateTotalTime(newTabata)
  }
  
  const calculateTotalTime = (tabata: useTabataProps) => {
    const { prepare, work, rest, rounds } = tabata
    const totalTime = prepare + (work + rest) * rounds + 1
    setTotalTime(totalTime)
  }

  useEffect(() => calculateTotalTime(currentTabata), [])
  
  return {
    currentTabata,
    isRunning,
    currentSeconds,
    currentRound,
    currentPhase,
    sectionTime,
    totalTime,
    toggle,
    reset,
    handleTabataChange,
  }
}
