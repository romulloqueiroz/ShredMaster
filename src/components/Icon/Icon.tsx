import View from '../View/View'
import { icon, colors } from '@styles'
import { Canvas, Path, rect, FitBox } from '@shopify/react-native-skia'
import { IconProps } from './Icon.types';

const Icon: React.FC<Partial<IconProps>> = ({
  name = 'play',
  color = 'white',
  size = 48,
}) => (
  <View w={size} h={size}>
    <Canvas style={{ flex: 1 }}>
      <FitBox
        src={rect(0, 0, 10, 12)}
        dst={rect(0, 0, size, size)}
      >
        {icon[name].map((d: string) => (
          <Path
            key={d}
            path={d}
            color={colors[color]}
          />
        ))}
      </FitBox>
    </Canvas>
  </View>
)

export default Icon
