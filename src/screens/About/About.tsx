import { Header, Text, View, Metronome } from '@components'
import { BaseLayout } from '@layouts'

const About = () => {
  return (
    <BaseLayout>
      <Header title='About' />
      <View mb={12} />
      <Metronome />
    </BaseLayout>
  )
}

export default About
