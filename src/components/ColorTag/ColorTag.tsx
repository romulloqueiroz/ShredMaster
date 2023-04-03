import Touchable from '../Touchable/Touchable'
import { Canvas, Rect, LinearGradient, vec } from '@shopify/react-native-skia'
import { gradients } from '@styles'
import { ColorTagProps } from './ColorTag.types'

 const ColorTag: React.FC<ColorTagProps> = ({ color = 'blue', size = 40, active, onPress }) => (
  <Touchable
    br={4}
    w={size}
    h={size}
    overflowHidden
    bw={active ? 2 : 0}
    bc='white'
    onPress={onPress}
  >
    <Canvas style={{ flex: 1 }}>
      <Rect x={0} y={0} width={size} height={size}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(size, size)}
          colors={gradients[color]}
        />
      </Rect>
    </Canvas>
  </Touchable>
)

export default ColorTag
