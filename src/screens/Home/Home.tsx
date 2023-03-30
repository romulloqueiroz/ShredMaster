import { View, Header, PlusButton } from '@components'
import { BaseLayout } from '@layouts'

const Home = () => {

  return (
    <BaseLayout view>
      <Header title='Home' />
      {/* <View bw={1} h='80%' bc='red1'>
        <View mv={18} />
      </View> */}
      <View absolute by={32} rx={16}>
        <PlusButton onPress={() => null} />
      </View>
    </BaseLayout>
  )
}

export default Home
