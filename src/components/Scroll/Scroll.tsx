import { ScrollView } from 'react-native'
import View from '../View/View'
import { ScrollProps } from './Scroll.types'

const Scroll: React.FC<Partial<ScrollProps>> = ({
  children,
  hideIndicator = false,
  horizontal = false,
  ...rest
}) => (
  <View {...{ ...rest }}>
    <ScrollView
      horizontal={horizontal}
      showsHorizontalScrollIndicator={!hideIndicator}
      showsVerticalScrollIndicator={!hideIndicator}
    >
      {children}
    </ScrollView>
  </View>
)

export default Scroll
