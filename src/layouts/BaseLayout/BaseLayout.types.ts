import { View, Scroll } from '@components'

export interface BaseLayoutProps {
  type?: typeof Scroll | typeof View
  view?: boolean
  ph?: number
  children: React.ReactNode
}
