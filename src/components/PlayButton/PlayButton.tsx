import { useState } from 'react'
import Icon from '../Icon/Icon'
import Touchable from '../Touchable/Touchable'
import { PlayButtonProps } from './PlayButton.types'

const PlayButton: React.FC<PlayButtonProps> = ({ onPress }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <Touchable 
      onPress={() => {
        onPress()
        setToggle(!toggle)
      }}
      bw={1}
      bc='glass2'
      bgc='glass1'
      round={56}
      main='center'
      cross='center'
      s={1}
    >
      <Icon size={20} name={toggle ? 'pause' : 'play'} />
    </Touchable>
  )
}

export default PlayButton
