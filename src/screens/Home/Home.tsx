import { useState } from 'react'
import { BaseLayout } from '@layouts'
import { getPx } from '@helpers'
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

const InstrumentSelector = () => (
  <View row bw={1} mt={12} main='space-between'>
      <View h={60} w={60} br={8} bgc='gray1'>
        <Instrument name='guitar' size={60} />
      </View>
      <View h={60} w={60} br={8} bgc='gray1'>
        <Instrument name='bass' size={60} />
      </View>
      <View h={60} w={60} br={8} bgc='gray1'>
        <Instrument name='keyboard' size={60} />
      </View>
      <View h={60} w={60} br={8} bgc='gray1'>
        <Instrument name='drums' size={60} />
      </View>
  </View>
)

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

    <InstrumentSelector />
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
