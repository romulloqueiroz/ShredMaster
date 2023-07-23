import { View } from 'react-native-rom-components'
import Text from '../../Text/Text'
import ModalCard from '../../ModalCard/ModalCard'
import Button from '../../Button/Button'
import Scroll from '../../Scroll/Scroll'
import Shredder from '../../Shredder/Shredder'
import { ShreddersType } from '@styles'
import { ListIcon } from '../ListIcon/ListIcon'
import { list } from '../ShredderModal.utils'
import { BodyProps } from './Body.types'

export const Body: React.FC<BodyProps> = ({ onDismiss }) => (
  <ModalCard onDismiss={onDismiss}>
    <View row main='center' mb={12}>
      <Shredder name='starter' size={120} />
    </View>

    <View cross='center' mb={24}>
      <Text
        color='white'
        size={20}
        mb={6}
      >
        Starter
      </Text>
      <Text color='subtitle'>
        Curent 0 day streak
      </Text>
    </View>

    <Scroll h={220} hideIndicator>
      {list.map((item) => (
        <ListIcon
          key={item.name}
          name={item.name as ShreddersType}
          title={item.title}
          desc={item.desc} />
      ))}
    </Scroll>

    <View row main='center' mt={24}>
      <Button title='Ok' onPress={onDismiss} />
    </View>
  </ModalCard>
)
