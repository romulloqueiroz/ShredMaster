import { Chart, Header, NoCardBg } from '@components'
import { View } from 'react-native-rom-components'
import { useExercises } from '@hooks'
import { BaseLayout } from '@layouts'
import { useState } from 'react'
import { FlatList } from 'react-native'

const Progress = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const { exercises } = useExercises()

  const onChartInteraction = (isInteracting: boolean) => setScrollEnabled(!isInteracting)

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
            exercise={item}
            onInteraction={onChartInteraction}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View mv={8} />} 
        bounces={false}
        scrollEnabled={scrollEnabled}
      />

    </BaseLayout>
  )
}

export default Progress
