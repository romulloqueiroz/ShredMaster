import { View, Chart, Header } from '@components'
import { BaseLayout } from '@layouts'

const Progress = () => {
  return (
    <BaseLayout>
      <Header title='Progress' />
      <View mv={18} />
      <Chart />
    </BaseLayout>
  )
}

export default Progress
