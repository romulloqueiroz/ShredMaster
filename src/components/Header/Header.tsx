import View from '../View/View'
import Icon from '../Icon/Icon'
import Touchable from '../Touchable/Touchable'
import SafeArea from '../SafeArea/SafeArea'

const Header = () => (
  <>
    <SafeArea />
    <View 
      h={48} 
      w='100%' 
      row
      main='space-between'
      cross='center'
    >
      <Touchable>
        <Icon size={20} name='arrowBack' />
      </Touchable>
    </View>
  </>
)

export default Header
