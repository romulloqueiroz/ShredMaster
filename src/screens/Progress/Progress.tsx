import { View, Chart, Header } from '@components'
import { useExercises } from '@hooks'
import { BaseLayout } from '@layouts'
import { FlatList } from 'react-native'

const Progress = () => {
  const { exercises } = useExercises()

  return (
    <BaseLayout view>
      <Header title='Progress' />
      <View mb={12} />

      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <Chart 
            key={item.id} 
            name={item.name} 
            color={item.color}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View mv={8} />} 
      />

    </BaseLayout>
  )
}

export default Progress
