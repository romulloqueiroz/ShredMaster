import { useState } from 'react'
import { FlatList } from 'react-native'
import { BaseLayout } from '@layouts'
import { 
  View, 
  Text,
  Header, 
  PlusButton, 
  PopupModal,
  Button,
  Instrument,
  Icon,
  Touchable,
} from '@components'
import { AddExerciseModal } from './AddExerciseModal/AddExerciseModal'
import { useExercises } from '@hooks'

interface HomeCardProps {
  name: string
}

const truncateString = (str: string) => (str.length > 13 ? str.slice(0, 18) + "..." : str)


const HomeCard: React.FC<HomeCardProps> = ({ name }) => {
  return (
    <Touchable 
      h={96}
      br={4}
      bc='orange2'
      bgc='card'
      s={1}
      mb={16}
      p={16}
      row
    >
      <View main='space-between' flex1>
        <View row cross='center'>
          <Text size={18} color='orange1'>{truncateString(name)}</Text>
          <View mh={4} />
          <Touchable>
            <Icon color='orange1' name='edit' size={24} />
          </Touchable>
        </View>

        <View row main='space-between'>
          <Text size={16}>155 bpms</Text>
          <Text size={16}>4/4</Text>
        </View>
      </View>


      <View ml={4} main='center' cross='center'>
        <Instrument size={72} />
      </View>
    </Touchable>
  )
}

const Home = () => {
  const { exercises, resetExercises } = useExercises()
  const [isVisible, setIsVisible] = useState(false)

  return (
    <BaseLayout view>
      <Header title='Home' />
      <View mb={80} />

      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <HomeCard 
            key={item.id} 
            name={item.name} 
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />

      {/* <Icon name='delete' size={200} /> */}


      {/* <View row main='center'>
        <Button title='Reset Exercises' onPress={resetExercises} w={200} />
      </View> */}

      <View absolute by={32} rx={16}>
        <PlusButton onPress={() => setIsVisible(true)} />
      </View>

      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <AddExerciseModal onDismiss={() => setIsVisible(false)} />
      </PopupModal>
    </BaseLayout>
  )
}

export default Home







// interface ColorItemProps {
//   color: keyof GradientsType
//   name: string
// }

// const ColorItem: React.FC<ColorItemProps> = ({ color, name }) => (
//   <Touchable row cross='center' mb={8}>
//     <ColorTag color={color} />
//     <Text ml={8}>{name}</Text>
//   </Touchable>
// )

// const ColorSelector = () => {

//   return (
//     <View mt={12}>
//       <Text mb={8}>Color Selector:</Text>
//       <Expander />
//     </View>
//   )
// }

// const InstrumentSelector = () => (
//   <View row bw={1} mt={12} main='space-between'>
//       <View h={60} w={60} br={8} bgc='gray1'>
//         <Instrument name='guitar' size={60} />
//       </View>
//       <View h={60} w={60} br={8} bgc='gray1'>
//         <Instrument name='bass' size={60} />
//       </View>
//       <View h={60} w={60} br={8} bgc='gray1'>
//         <Instrument name='keyboard' size={60} />
//       </View>
//       <View h={60} w={60} br={8} bgc='gray1'>
//         <Instrument name='drums' size={60} />
//       </View>
//   </View>
// )