import View from '../View/View'
import Text from '../Text/Text'
import { Stain } from './Stain/Stain'
import { deviceHeight, deviceWidth } from '@styles'
import { NoCardBgProps } from './NoCardBg.types'

const NoCardBg: React.FC<NoCardBgProps> = ({ title }) => (
  <View
    mt={deviceHeight * 0.1}
    main='center'
    cross='center'
  >
    <Stain
      size={deviceWidth * 0.8}
      color='glass2' 
    />
    <View absolute pt={16}>
      <Text 
        center 
        size={18} 
        color='subtitle'
      >
        {title}
      </Text>
    </View>
  </View>
)

export default NoCardBg
