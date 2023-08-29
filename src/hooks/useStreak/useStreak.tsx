import { useEffect, useState } from 'react'
import { SecureStore } from '@helpers'
import { useRecoilState } from 'recoil'
import { currentStreakState } from '@state'

const STREAK_KEY = 'current_streak'
const LAST_EXERCISE_DATE_KEY = 'last_exercise_date'

export interface ShredderName {
  starter: string
  novice: string
  apprentice: string
  musician: string
  virtuoso: string
  master: string
  elite: string
  legend: string
  maestro: string
  royal: string
  divine: string
}

const chooseShredder = (streak: number) => {
  switch (true) {
    case streak < 5:
      return 'starter'
    case streak < 10:
      return 'novice'
    case streak < 20:
      return 'apprentice'
    case streak < 30:
      return 'musician'
    case streak < 60:
      return 'virtuoso'
    case streak < 90:
      return 'master'
    case streak < 120:
      return 'elite'
    case streak < 150:
      return 'legend'
    case streak < 180:
      return 'maestro'
    case streak < 365:
      return 'royal'
    default:
      return 'divine'
  }
}

const getCurrentDate = () => {
  const date = new Date()
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

const isDateYesterday = (dateString: string) => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return dateString === `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`
}

export const useStreak = () => {
  const [currentStreak, setCurrentStreak] = useRecoilState(currentStreakState)

  useEffect(() => {
    const fetchStreak = async () => {
      const streak = await SecureStore.find(STREAK_KEY)
      setCurrentStreak(streak || 0)
    }

    fetchStreak()
  }, [])

  const updateStreak = async () => {
    const lastExerciseDate = await SecureStore.find(LAST_EXERCISE_DATE_KEY)
    const today = getCurrentDate()

    if (lastExerciseDate === today) {
      return
    } else if (isDateYesterday(lastExerciseDate)) {
      setCurrentStreak(prevStreak => prevStreak + 1)
      await SecureStore.create(STREAK_KEY, currentStreak + 1)
    } else {
      setCurrentStreak(1)
      await SecureStore.create(STREAK_KEY, 1)
    }

    await SecureStore.create(LAST_EXERCISE_DATE_KEY, today)
  }

  const resetStreak = async () => {
    await SecureStore.create(STREAK_KEY, 0)
    await SecureStore.create(LAST_EXERCISE_DATE_KEY, '')
    setCurrentStreak(0)
  }

  const currentShredder = chooseShredder(currentStreak) as keyof ShredderName

  return {
    currentStreak,
    updateStreak,
    currentShredder,
    resetStreak,
  }
}
