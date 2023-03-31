import View from '../View/View'
import Text from '../Text/Text'
import SafeArea from '../SafeArea/SafeArea'
import ShredderModal from '../ShredderModal/ShredderModal'
import { HeaderProps } from './Header.types'

const Header: React.FC<HeaderProps> = ({ title = '' }) => {
  return (
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
        ph={8}
      >
        <ShredderModal />
        <Text>{title}</Text>
      </View>
    </>
  )
}

export default Header
