import View from '../View/View'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'
import SafeArea from '../SafeArea/SafeArea'

const Header = () => {
  return (
    <>
      <SafeArea />
      <View 
        h={48} 
        w='100%' 
        row
        main='space-between'
        cross='center'
      >
        <Icon size={20} name='arrowBack' />
      </View>
    </>
  )
}

export default Header
