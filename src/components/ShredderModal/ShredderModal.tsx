import { useState } from 'react'
import Text from '../Text/Text'
import { View } from 'react-native-rom-components'
import Shredder from '../Shredder/Shredder'
import Touchable from '../Touchable/Touchable'
import PopupModal from '../PopupModal/PopupModal'
import { Body } from './Body/Body'
import { useStreak } from '@hooks'

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

 const ShredderModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { currentStreak } = useStreak()
  return (
    <>
      <Touchable
        row
        main='center'
        cross='center'
        bgc='card'
        ph={8}
        h={28}
        br={8}
        onPress={() => setIsVisible(true)} 
      >
        <Text size={18} color='subtitle'>{currentStreak}</Text>
        <View mh={2} />
        <Shredder name={chooseShredder(currentStreak)} size={18} />
      </Touchable>
      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <Body onDismiss={() => setIsVisible(false)} />
      </PopupModal>
    </>
  )
}

export default ShredderModal
