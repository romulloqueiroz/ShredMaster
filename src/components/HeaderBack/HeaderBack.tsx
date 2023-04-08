import View from '../View/View'
import Icon from '../Icon/Icon'
import PopupModal from '../PopupModal/PopupModal'
import Touchable from '../Touchable/Touchable'
import SafeArea from '../SafeArea/SafeArea'
import { useNavigation } from '@hooks'
import { useState } from 'react'
import { GoBackModal } from './GoBackModal/GoBackModal'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <SafeArea />
      <View 
        h={48} 
        w='100%' 
        row
        main='space-between'
        cross='center'
      >
        <Touchable onPress={() => setShowModal(true)}>
          <Icon size={20} name='arrowBack' />
        </Touchable>
      </View>
      <PopupModal
        isVisible={showModal}
        onDismiss={() => setShowModal(false)}
      >
        <GoBackModal onDismiss={() => setShowModal(false)} />
      </PopupModal>
    </>
  )
}

export default Header
