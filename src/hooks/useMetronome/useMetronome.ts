import { Audio } from 'expo-av'
import { useState, useEffect, useRef } from 'react'

export const useMetronome = (beatsPerMeasure: number, noteValue: number, tempo: number) => {
  const [soundLoaded, setSoundLoaded] = useState(false)
  const [headLoaded, setHeadLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(0)
  const [_, setCurrentBeat] = useState(0)

  const tickSound = useRef(new Audio.Sound()).current
  const headSound = useRef(new Audio.Sound()).current
  const interval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const loadTickSound = async () => {
      try {
        await tickSound.loadAsync(require('../../assets/metronome_tick.mp3'))
        setSoundLoaded(true)
      } catch (error) {
        console.warn('Error loading metronome sound: ', error)
      }
    }

    const loadHeadSound = async () => {
      try {
        await headSound.loadAsync(require('../../assets/metronome_head.mp3'))
        setHeadLoaded(true)
      } catch (error) {
        console.warn('Error loading metronome head sound: ', error)
      }
    }

    loadTickSound()
    loadHeadSound()
  }, [])

  useEffect(() => {
    setBpm(tempo * (beatsPerMeasure / 4))
  }, [beatsPerMeasure, tempo])

  const playClick = async () => {
    if (soundLoaded) {
      try {
        await tickSound.replayAsync()
      } catch (error) {
        console.warn('Error playing metronome sound: ', error)
      }
    }
  }

  const playHead = async () => {
    if (headLoaded) {
      try {
        await headSound.replayAsync()
      } catch (error) {
        console.warn('Error playing metronome head sound: ', error)
      }
    }
  }

  const startStopMetronome = () => {
    if (!isPlaying) {
      setIsPlaying(true)
      playClick()
    } else {
      setIsPlaying(false)
      tickSound.stopAsync()
      headSound.stopAsync()
      setCurrentBeat(0)
    }
  }

  const calculateInterval = () => (60 / tempo) * 1000 * (4 / noteValue)

  const startInterval = () => {
    setCurrentBeat(0)
    playHead()
    interval.current = setInterval(() => {
      setCurrentBeat((prevBeat) => {
        if (prevBeat === 0) playHead()
        else playClick()
        return (prevBeat + 1) % beatsPerMeasure
      })
    }, calculateInterval())
  }

  const stopInterval = () => {
    if (interval.current) {
      clearInterval(interval.current)
      interval.current = null 
    }
    setCurrentBeat(0)
  }
  
  const handlePlayStopPress = () => {
    if (!isPlaying) {
      startInterval()
    } else {
      stopInterval()
    }
    startStopMetronome()
  }

  return {
    isPlaying,
    bpm,
    handlePlayStopPress,
  }
}