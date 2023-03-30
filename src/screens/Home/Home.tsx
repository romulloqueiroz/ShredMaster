import { View, Header, PlusButton, PopupModal, Shredder } from '@components'
import { BaseLayout } from '@layouts'
import { useState } from 'react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <BaseLayout view>
      <Header title='Home' />

      <View bgc='gray1' w={260} h={260} br={8}>
        <Shredder name='starter' size={260} />
      </View>

      <View absolute by={32} rx={16}>
        <PlusButton onPress={() => setIsVisible(true)} />
      </View>
      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <View h={40} w={40} bgc='red1' />
      </PopupModal>
    </BaseLayout>
  )
}

export default Home
