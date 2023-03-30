import { useState } from 'react'
import Icon from '../Icon/Icon'
import Touchable from '../Touchable/Touchable'
import { PlusButtonProps } from './PlusButton.types'

const PlusButton: React.FC<PlusButtonProps> = ({ onPress }) => (
  <Touchable 
    onPress={onPress}
    bw={1}
    bc='glass2'
    bgc='glass1'
    round={56}
    main='center'
    cross='center'
    s={1}
  >
    <Icon size={20} name='plus' />
  </Touchable>
)

export default PlusButton
