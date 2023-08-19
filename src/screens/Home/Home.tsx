import { useState } from 'react'
import { FlatList } from 'react-native'
import { BaseLayout } from '@layouts'
import { 
  Header, 
  PopupModal,
  Button,
  RoundButton,
  NoCardBg,
} from '@components'
import { View } from 'react-native-rom-components'
import { AddExerciseModal } from './AddExerciseModal/AddExerciseModal'
import { useExercises } from '@hooks'
import { HomeCard } from './HomeCard/HomeCard'

const Home = () => {
  const { 
    exercises, 
    // resetExercises 
  } = useExercises()
  const [isVisible, setIsVisible] = useState(false)

  return (
    <BaseLayout view>
      <Header title='Home' />
      <View mb={12} />

      {exercises.length === 0 && (
        <NoCardBg title='Create an exercise to begin' />
      )}

      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <HomeCard 
            key={item.id} 
            id={item.id}
            name={item.name} 
            bpm={item.bpm}
            color={item.color}
            instrument={item.instrument}
            prepare={item.prepare}
            work={item.work}
            rest={item.rest}
            rounds={item.rounds}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View mv={8} />} 
      />

      {/* <View row main='center'>
        <Button title='Reset Exercises' onPress={resetExercises} w={200} />
      </View> */}

      <View absolute by={32} rx={16}>
        <RoundButton icon='plus' onPress={() => setIsVisible(true)} />
      </View>

      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <AddExerciseModal onDismiss={() => setIsVisible(false)} />
      </PopupModal>
    </BaseLayout>
  )
}

export default Home
