import View from '../../View/View'
import Text from '../../Text/Text'
import Button from '../../Button/Button'
import ModalCard from '../../ModalCard/ModalCard'
import { useNavigation } from '@hooks'
import { GoBackModalProps } from './GoBackModal.types'

export const GoBackModal: React.FC<GoBackModalProps> = ({ onDismiss }) => {
  const { goBack } = useNavigation()
  return (
    <ModalCard noCloseButton>
      <Text size={18} mb={8} center>
        Are you sure you want to go back?
      </Text>
      <Text mb={18} center>
        Your progress will be lost.
      </Text>
      <View row>
        <Button title='Cancel' onPress={onDismiss} w={134} />
        <View mh={4} />
        <Button
          title='Go Back'
          w={134}
          color='red1'
          onPress={() => {
            onDismiss()
            goBack()
          }} />
      </View>
    </ModalCard>
  )
}
