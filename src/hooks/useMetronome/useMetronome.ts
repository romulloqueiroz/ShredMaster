import { useEffect, useRef, useState } from 'react'
import { Audio } from 'expo-av'

export const useMetronome = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(100)
  const [timeSignatureNumerator, setTimeSignatureNumerator] = useState(4)
  const [timeSignatureDenominator, setTimeSignatureDenominator] = useState(4) 
  const [beatIndex, setBeatIndex] = useState(0)
  const [soundsLoaded, setSoundsLoaded] = useState(false)

  const strongBeatSound = require('../../assets/metronome_head.mp3')
  const normalBeatSound = require('../../assets/metronome_tick.mp3')

  const strongBeat = useRef(new Audio.Sound())
  const normalBeat = useRef(new Audio.Sound())

  const oneBeatDurationInMs = (bpm: number) => (60000 / bpm) * (4 / timeSignatureDenominator)

  const oneBeatInSeconds = oneBeatDurationInMs(bpm) / 1000

  const preloadSounds = async () => {
    await Promise.all([
      strongBeat.current.loadAsync(strongBeatSound),
      normalBeat.current.loadAsync(normalBeatSound),
    ])
    setSoundsLoaded(true)
  }

  useEffect(() => {
    preloadSounds()
  }, [])

  useEffect(() => {
    if (!soundsLoaded) return

    let engine: number | null = null

    const playSound = async (sound: Audio.Sound) => await sound.replayAsync()

    const sound = () => {
      if (beatIndex === 0) playSound(strongBeat.current)
      else playSound(normalBeat.current)
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
  }, [isPlaying, bpm, timeSignatureNumerator, beatIndex, soundsLoaded])

  const togglePlay = () => {
    if (soundsLoaded) setIsPlaying(!isPlaying)
  }

  const handleChangeBPM = (value: number) => {
    setBpm(value)
    setBeatIndex(0)
  }

  const handleTimeSignatureNumerator = (value: number) => {
    setTimeSignatureNumerator(value)
    setBeatIndex(0)
  }

  const handleTimeSignatureDenominator = (value: number) => {
    setTimeSignatureDenominator(value)
    setBeatIndex(0)
  }

  return {
    isPlaying,
    bpm,
    timeSignatureNumerator,
    timeSignatureDenominator,
    togglePlay,
    handleChangeBPM,
    handleTimeSignatureNumerator,
    handleTimeSignatureDenominator,
  }
}
