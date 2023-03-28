import View from '../View/View'
import Text from '../Text/Text'
import SafeArea from '../SafeArea/SafeArea'
import { HeaderProps } from './Header.types'

const Header: React.FC<HeaderProps> = ({ title = '' }) => (
  <>
    <SafeArea />
    <View 
      h={48} 
      w='100%' 
      row
      main='space-between'
      cross='center'
      bw={1}
      bc='gray2'
    >
      <Text>{title}</Text>
    </View>
  </>
)

export default Header
