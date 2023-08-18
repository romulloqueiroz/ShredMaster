import { Text, Button, Scroll, Input, ModalCard } from '@components'
import { GradientsType, InstrumentsType, deviceHeight } from '@styles'
import { useExercises } from '@hooks'
import { useState } from 'react'

export interface TimerEndModalProps {
  onDismiss: () => void
}

export const TimerEndModal: React.FC<TimerEndModalProps> = ({ onDismiss }) => {
  const { addExercise } = useExercises()

  return (
    <ModalCard onDismiss={onDismiss} >
      <Scroll h={deviceHeight*0.54}>
        <Text mb={16}>
          Congratulations! You have completed the exercise.
        </Text>
      </Scroll>
    </ModalCard>
  )
}
