import View from '../View/View'
import { Canvas, Rect, LinearGradient, vec } from '@shopify/react-native-skia'
import { gradients } from '@styles'
import { ColorTagProps } from './ColorTag.types'

 const ColorTag: React.FC<ColorTagProps> = ({ color = 'blue', size = 40 }) => (
  <View
    br={12}
    w={size}
    h={size}
    overflowHidden
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
  </View>
)

export default ColorTag
