import { useState } from 'react'
import { BaseLayout } from '@layouts'
import { deviceWidth, GradientsType } from '@styles'
import { 
  View, 
  Text, 
  Header, 
  PlusButton, 
  PopupModal,
  Expander,
  ColorTag,
  Touchable,
  Instrument,
} from '@components'

interface ColorItemProps {
  color: keyof GradientsType
  name: string
}

const ColorItem: React.FC<ColorItemProps> = ({ color, name }) => (
  <Touchable row cross='center' mb={8}>
    <ColorTag color={color} />
    <Text ml={8}>{name}</Text>
  </Touchable>
)

const ColorSelector = () => {

  return (
    <View mt={12}>
      <Text mb={8}>Color Selector:</Text>
      <Expander />
    </View>
  )
}

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

    <ColorSelector />
  </View>
)

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <BaseLayout view>
      <Header title='Home' />
      <View mb={80} />

      <View h={220} w={220} br={8} bgc='gray1'>
        <Instrument name='drums' size={220} />
      </View>

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
