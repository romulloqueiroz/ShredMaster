import Icon from '../Icon/Icon'
import Touchable from '../Touchable/Touchable'
import { RoundButtonProps } from './RoundButton.types'

const RoundButton: React.FC<RoundButtonProps> = ({ onPress, icon }) => (
  <Touchable 
    onPress={onPress}
    bw={1}
    bc='subtitle'
    bgc='glass2'
    round={56}
    main='center'
    cross='center'
    s={1}
  >
    <Icon size={20} name={icon} />
  </Touchable>
)

export default RoundButton
