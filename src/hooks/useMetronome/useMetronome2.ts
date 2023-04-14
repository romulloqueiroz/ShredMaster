import { useEffect, useState } from 'react'
import { Audio, AVPlaybackStatus } from 'expo-av'

export const useMetronome = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(100)
  const [timeSignatureNumerator, setTimeSignatureNumerator] = useState(4)
  const [beatIndex, setBeatIndex] = useState(0)

  const strongBeatSound = require('../../assets/metronome_head.mp3')
  const normalBeatSound = require('../../assets/metronome_tick.mp3')

  const oneBeatDurationInMs = (bpm: number) => 60000 / bpm
  const oneBeatInSeconds = oneBeatDurationInMs(bpm) / 1000

  useEffect(() => {
    let engine: number | null = null

    const playSound = async (soundFile: any) => {
      const { sound } = await Audio.Sound.createAsync(soundFile)
      await sound.playAsync()
      sound.setOnPlaybackStatusUpdate(async (status: AVPlaybackStatus) => {
        if (status.isLoaded && status.didJustFinish) await sound.unloadAsync()
      })
    }

    const sound = () => {
      if (beatIndex === 0) playSound(strongBeatSound)
      else playSound(normalBeatSound)
      if (beatIndex === timeSignatureNumerator - 1) setBeatIndex(0)
      else setBeatIndex((beatIndex) => beatIndex + 1)
    }

    const timer = () => sound()

    if (isPlaying) {
      if (engine !== null) window.clearInterval(engine)
      engine = window.setInterval(timer, oneBeatInSeconds * 1000)
    } else {
      if (engine !== null) window.clearInterval(engine)
      setBeatIndex(0)
    }

    return () => {
      if (engine !== null) window.clearInterval(engine)
    }
  }, [isPlaying, bpm, timeSignatureNumerator, beatIndex])

  const togglePlay = () => setIsPlaying(!isPlaying)

  const handleChangeBPM = (value: number) => {
    setBpm(value)
    setBeatIndex(0)
  }

  const handleTimeSignatureNumerator = (value: number) => {
    setTimeSignatureNumerator(value)
    setBeatIndex(0)
  }

  return {
    isPlaying,
    bpm,
    timeSignatureNumerator,
    togglePlay,
    handleChangeBPM,
    handleTimeSignatureNumerator,
  }
}
