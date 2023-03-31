import { useState } from 'react'
import { BaseLayout } from '@layouts'
import { deviceWidth } from '@styles'
import { 
  View, 
  Text, 
  Header, 
  PlusButton, 
  PopupModal,
} from '@components'

const AddExerciseModal = () => (
  <View 
    w={deviceWidth - 64}
    bgc='bottomBar'
    br={14}
    p={16}
  >
    <View row main='center'mb={12}>
      <Text size={24}>Create Exercise</Text>
    </View>
    <Text>Name: Speed Burst</Text>
    <Text>Tempo: 4/4</Text>
    <Text>BPM: 150</Text>
  </View>
)

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <BaseLayout view>
      <Header title='Home' />
      <View mb={80} />

      <View absolute by={32} rx={16}>
        <PlusButton onPress={() => setIsVisible(true)} />
      </View>

      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <AddExerciseModal />
      </PopupModal>

    </BaseLayout>
  )
}

export default Home
