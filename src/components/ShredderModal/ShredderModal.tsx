import { useState } from 'react'
import Text from '../Text/Text'
import { View } from 'react-native-rom-components'
import Shredder from '../Shredder/Shredder'
import Touchable from '../Touchable/Touchable'
import PopupModal from '../PopupModal/PopupModal'
import { Body } from './Body/Body'
import { useStreak } from '@hooks'

 const ShredderModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { currentStreak, currentShredder } = useStreak()
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
        <Shredder name={currentShredder} size={18} />
      </Touchable>
      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <Body 
          onDismiss={() => setIsVisible(false)} 
          {...{ currentStreak, currentShredder }}
        />
      </PopupModal>
    </>
  )
}

export default ShredderModal
