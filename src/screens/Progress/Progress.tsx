import { View, Chart, Header } from '@components'
import { BaseLayout } from '@layouts'

const Progress = () => {
  return (
    <BaseLayout>
      <Header title='Progress' />
      <View mv={18} />
      <Chart color='green' />
      <View mv={18} />
      <Chart color='orange' />
      <View mv={18} />
      <Chart color='pink' />
    </BaseLayout>
  )
}

export default Progress
