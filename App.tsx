import { View, Metronome } from '@components'
import { BaseLayout } from '@layouts'

const App = () => {
  return (
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 mt={220}>
        <Metronome />
      </View>
    </BaseLayout>
  )
}

export default App
