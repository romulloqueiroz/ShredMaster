import { useState, useEffect, useRef } from 'react'
import Text from '../Text/Text'
import Button from '../Button/Button'
import { Audio } from 'expo-av'

const Metronome = () => {
  const [soundLoaded, setSoundLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(120)

  const sound = useRef(new Audio.Sound()).current
  const interval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const loadSound = async () => {
      try {
        await sound.loadAsync(require('../../assets/metronome_tick.mp3'))
        setSoundLoaded(true)
      } catch (error) {
        console.warn('Error loading metronome sound: ', error)
      }
    }
    loadSound()
  }, [])

  const playClick = async () => {
    if (soundLoaded) {
      try {
        await sound.replayAsync()
      } catch (error) {
        console.warn('Error playing metronome sound: ', error)
      }
    }
  }

  const startStopMetronome = () => {
    if (!isPlaying) {
      setIsPlaying(true)
      playClick()
    } else {
      setIsPlaying(false)
      sound.stopAsync()
    }
  }

  const handleBpmChange = (value: number) => {
    setBpm(value)
    if (isPlaying) {
      sound.stopAsync()
      playClick()
    }
  }

  const calculateInterval = () => (60 / bpm) * 1000
  const startInterval = () => interval.current = setInterval(playClick, calculateInterval())
  const stopInterval = () => clearInterval(interval.current ?? NaN)
  
  const handlePlayStopPress = () => {
    if (!isPlaying) startInterval()
    else stopInterval()
    startStopMetronome()
  }

  return (
    <>
      <Text size={24} mb={12}>Metronome</Text>
      <Text mb={12}>{bpm}</Text>
      <Button 
        onPress={handlePlayStopPress} 
        title={isPlaying ? 'Stop' : 'Start'} 
      />
    </>
  )
}

export default Metronome
