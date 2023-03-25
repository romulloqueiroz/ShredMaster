import { View, Tabata, LinearProgress } from '@components'
import { BaseLayout } from '@layouts'

const App = () => {
  return (
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 mt={64}>
        <View h={62} />
        <Tabata />
        <View h={32} />
        <LinearProgress progress={50} />
      </View>
    </BaseLayout>
  )
}

export default App
