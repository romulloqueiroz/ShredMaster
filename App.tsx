import { View, Chart } from '@components'
import { BaseLayout } from '@layouts'

const App = () => {
  return (
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 mt={62}>
        <Chart />
      </View>
    </BaseLayout>
  )
}

export default App
