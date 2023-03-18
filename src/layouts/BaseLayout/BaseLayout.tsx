import { View, Scroll } from '@components'
import { BaseLayoutProps } from './BaseLayout.types'

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  view = false,
  ph = 16,
  type: Container = view ? View : Scroll,
}) => (
  <Container ph={ph} flex1 bgc="background" hideIndicator>
    {children}
  </Container>
)

export default BaseLayout
