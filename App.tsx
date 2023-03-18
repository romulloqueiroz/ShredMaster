import { View, Text, Chart } from '@components'
import { BaseLayout } from '@layouts'

const App = () => {
  return (
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 bw={1} bc='orange' mt={62}>
        <Chart />
        <Text mt={20}>APP</Text>
      </View>
    </BaseLayout>
  )
}

export default App
