import { View, Chart, Header, NoCardBg } from '@components'
import { useExercises } from '@hooks'
import { BaseLayout } from '@layouts'
import { FlatList } from 'react-native'

const Progress = () => {
  const { exercises } = useExercises()

  return (
    <BaseLayout view>
      <Header title='Progress' />
      <View mb={12} />
      {exercises.length === 0 && (
        <NoCardBg title='When an exercise is created, its chart will appear here' />
      )}
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <Chart 
            key={item.id} 
            name={item.name} 
            color={item.color}
            id={item.id}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View mv={8} />} 
        bounces={false}
      />
    </BaseLayout>
  )
}

export default Progress
