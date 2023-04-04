import {
  View,
  Text, 
  Icon,
  Touchable,
  Instrument,
  PopupModal,
  Button,
} from '@components'
import { truncateString } from '@helpers'
import { HomeCardProps } from './HomeCard.types'
import { useState } from 'react'
import { deviceWidth } from '@styles'

interface StartPracticeModalProps {
  onDismiss: () => void
}

const StartPracticeModal: React.FC<StartPracticeModalProps> = ({ onDismiss }) => {
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
        <Button title='Go' onPress={() => null} w={134} />
      </View>
    </View>
  )
}

export const HomeCard: React.FC<HomeCardProps> = ({ name }) => {
  const [isPracticeModalVisible, setIsPracticeModalVisible] = useState(false)
  return (
    <>
      <Touchable
        h={96}
        br={4}
        bc='orange2'
        bgc='card'
        s={1}
        mb={16}
        p={16}
        row
        onPress={() => setIsPracticeModalVisible(true)}
      >
        <View main='space-between' flex1>
          <View row cross='center'>
            <Text size={18} color='orange1'>{truncateString(name)}</Text>
            <View mh={4} />
            <Touchable>
              <Icon color='orange1' name='edit' size={24} />
            </Touchable>
          </View>

          <View row main='space-between'>
            <Text size={16}>155 bpms</Text>
            <Text size={16}>4/4</Text>
          </View>
        </View>

        <View ml={4} main='center' cross='center'>
          <Instrument size={72} />
        </View>
      </Touchable>

      <PopupModal 
        isVisible={isPracticeModalVisible} 
        onDismiss={() => setIsPracticeModalVisible(false)}
      >
        <StartPracticeModal onDismiss={() => setIsPracticeModalVisible(false)} />
      </PopupModal>
    </>
  )
}
