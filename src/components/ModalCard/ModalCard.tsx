import React from 'react'
import { View } from 'react-native-rom-components'
import Icon from '../Icon/Icon'
import Touchable from '../Touchable/Touchable'
import { deviceWidth } from '@styles'
import { ModalCardProps } from './ModalCard.types'

const ModalCard: React.FC<ModalCardProps> = ({ onDismiss, children, noCloseButton }) => (
  <View
    w={deviceWidth - 64}
    bgc='card'
    br={4}
    p={16}
    bw={2}
    bc='subtitle'
  >  
    {!noCloseButton && (
      <Touchable onPress={onDismiss} row main='flex-end' mb={8}>
        <Icon name='close' size={24} />
      </Touchable>
    )}
    {children}
  </View>
)

export default ModalCard
