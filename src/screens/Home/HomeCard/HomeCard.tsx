import {
  View,
  Text, 
  Icon,
  Touchable,
  Instrument,
  PopupModal,
} from '@components'
import { truncateString } from '@helpers'
import { HomeCardProps } from './HomeCard.types'
import { useState } from 'react'
import { StartPracticeModal } from './StartPracticeModal/StartPracticeModal'

export const HomeCard: React.FC<HomeCardProps> = ({ name, color, instrument }) => {
  const [isPracticeModalVisible, setIsPracticeModalVisible] = useState(false)
  return (
    <>
      <Touchable
        h={96}
        br={4}
        bc='orange2'
        bgc='card'
        s={1}
        p={16}
        row
        onPress={() => setIsPracticeModalVisible(true)}
      >
        <View main='space-between' flex1>
          <View row cross='center'>
            <Text size={18} color={`${color}1`}>
              {truncateString(name)}
            </Text>
            <View mh={4} />
            <Touchable>
              <Icon 
                color={`${color}1`} 
                name='edit' 
                size={24} 
              />
            </Touchable>
          </View>

          <View row main='space-between'>
            <Text size={16}>155 bpms</Text>
            <Text size={16}>4/4</Text>
          </View>
        </View>

        <View ml={4} main='center' cross='center'>
          <Instrument size={72} name={instrument} />
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
