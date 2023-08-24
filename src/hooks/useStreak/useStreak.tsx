import { useEffect, useState } from 'react'
import { SecureStore } from '@helpers'

const STREAK_KEY = 'current_streak'
const LAST_EXERCISE_DATE_KEY = 'last_exercise_date'

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
  const [currentStreak, setCurrentStreak] = useState<number>(0)

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

  return {
    currentStreak,
    updateStreak
  }
}
