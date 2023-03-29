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
    </BaseLayout>
  )
}

export default Progress
