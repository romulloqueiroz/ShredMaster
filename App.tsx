import { View, Icon } from '@components'
import { BaseLayout } from '@layouts'

const App = () => {
  return (
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 mt={64}>
        <View h={62} />
        <Icon name='pause' />
        <View h={32} />
      </View>
    </BaseLayout>
  )
}

export default App
