import { View, Tabata } from '@components'
import { BaseLayout } from '@layouts'

const App = () => {
  return (
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 mt={120}>
        <View h={62} />
        <Tabata />
        <View h={32} />
      </View>
    </BaseLayout>
  )
}

export default App
