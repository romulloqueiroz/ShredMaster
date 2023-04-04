import { View,Text, Button } from '@components'
import { deviceWidth } from '@styles'
import { StartPracticeModalProps } from './StartPracticeModal.types'

export const StartPracticeModal: React.FC<StartPracticeModalProps> = ({ onDismiss }) => {
  return (
    <View w={deviceWidth * 0.8} p={16} bgc='card' bw={2} bc='subtitle' s={1}>
      <View mb={12} cross='center'>
        <Text size={20} mb={8}>Start Practice Session</Text>
        <Text color='subtitle' mb={8}>Speed Burst</Text>
        <Text>155 BPMs</Text>
      </View>
      <View row>
        <Button title='Cancel' onPress={onDismiss} w={134} />
        <View mh={4} />
        <Button title='Start' onPress={() => null} w={134} color='red1' />
      </View>
    </View>
  )
}
