import { useState } from 'react'
import Text from '../Text/Text'
import Shredder from '../Shredder/Shredder'
import Touchable from '../Touchable/Touchable'
import PopupModal from '../PopupModal/PopupModal'
import { Body } from './Body/Body'

 const ShredderModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <Touchable
        row
        main='center'
        cross='center'
        bgc='gray1'
        w={48}
        h={28}
        br={24}
        onPress={() => setIsVisible(true)} 
      >
        <Text color='background'>0</Text>
        <Shredder name='starter' size={20} />
      </Touchable>
      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <Body />
      </PopupModal>
    </>
  )
}

export default ShredderModal
