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
} from '@components'
import { AddExerciseModal } from './AddExerciseModal/AddExerciseModal'
import { useExercises } from '@hooks'

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
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View row main='center'>
        <Button title='Reset Exercises' onPress={resetExercises} w={200} />
      </View>

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