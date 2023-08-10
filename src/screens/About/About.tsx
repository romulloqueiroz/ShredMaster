import { Header, Metronome } from '@components'
import { View } from 'react-native-rom-components'
import { BaseLayout } from '@layouts'

const About = () => {
  return (
    <BaseLayout view>
      <Header title='About' />
      <View mb={12} /> 
      {/* <Metronome /> */}
    </BaseLayout>
  )
}

export default About
