import { useState } from 'react'
import Text from '../Text/Text'
import View from '../View/View'
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
        bgc='card'
        ph={8}
        h={28}
        br={8}
        onPress={() => setIsVisible(true)} 
      >
        <Text size={18} color='subtitle'>0</Text>
        <View mh={2} />
        <Shredder name='starter' size={18} />
      </Touchable>
      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <Body onDismiss={() => setIsVisible(false)} />
      </PopupModal>
    </>
  )
}

export default ShredderModal
