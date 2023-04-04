import { useState } from 'react'
import Icon from '../Icon/Icon'
import Touchable from '../Touchable/Touchable'
import { IconType } from '@styles'

export interface RoundButtonProps {
  onPress: () => void
  icon: IconType
}


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
