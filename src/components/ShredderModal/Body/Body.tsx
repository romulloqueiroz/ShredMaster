import View from '../../View/View'
import Text from '../../Text/Text'
import Scroll from '../../Scroll/Scroll'
import Shredder from '../../Shredder/Shredder'
import { deviceWidth, ShreddersType } from '@styles'
import { ListIcon } from '../ListIcon/ListIcon'
import { list } from '../ShredderModal.utils'

export const Body = () => (
  <View
    w={deviceWidth - 64}
    bgc='card'
    br={4}
    p={24}
    bw={2}
    bc='subtitle'
  >
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
  </View>
)
