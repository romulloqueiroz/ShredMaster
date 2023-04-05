import { Header, Text, View } from '@components'
import { BaseLayout } from '@layouts'

const About = () => {
  return (
    <BaseLayout>
      <Header title='About' />
      <View mb={12} />
      <Text>About</Text>
    </BaseLayout>
  )
}

export default About
