import { View, CircularProgress } from '@components'
import { BaseLayout } from '@layouts'

const App = () => {
  return (
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 mt={120}>
        <CircularProgress color='#C4475A' strokeWidth={10} />
        <CircularProgress duration={5000} size={240} color='#74b9ff' />
        <CircularProgress size={80} color='#61E0A1' strokeWidth={6} />
      </View>
    </BaseLayout>
  )
}

export default App
