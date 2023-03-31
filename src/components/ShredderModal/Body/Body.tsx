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
    bgc='bottomBarIcon'
    br={14}
    p={24}
  >
    <View row main='center' mb={12}>
      <Shredder name='starter' size={100} />
    </View>

    <View cross='center' mb={24}>
      <Text
        color='background'
        size={20}
        mb={6}
      >
        Starter
      </Text>
      <Text color='bottomBar'>
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