import { Scroll } from '@components'
import { View } from 'react-native-rom-components'

export interface BaseLayoutProps {
  type?: typeof Scroll | typeof View
  view?: boolean
  ph?: number
  children: React.ReactNode
}
