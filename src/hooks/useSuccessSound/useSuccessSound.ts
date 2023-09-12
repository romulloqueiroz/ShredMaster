import { useState, useEffect, useRef } from 'react'
import { Audio } from 'expo-av'

export const useSuccessSound = () => {
  const [successSoundLoaded, setSuccessSoundLoaded] = useState(false)
  const successSound = useRef(new Audio.Sound())

  const successSoundSource = require('../../assets/success.mp3')

  const loadSuccessSound = async () => {
    try {
      await successSound.current.loadAsync(successSoundSource)
      setSuccessSoundLoaded(true)
    } catch (error) {
      console.error('Error loading success sound:', error)
    }
  }

  useEffect(() => {
    loadSuccessSound()

    return () => {
      if (successSoundLoaded) {
        successSound.current.unloadAsync()
      }
    }
  }, [])

  const playSuccessSound = async () => {
    if (successSoundLoaded) {
      try {
        await successSound.current.replayAsync()
      } catch (error) {
        console.error('Error playing success sound:', error)
      }
    }
  }

  return playSuccessSound
}
