import { View } from 'react-native-rom-components'
import { icon, colors } from '@styles'
import { Canvas, Path, rect, FitBox } from '@shopify/react-native-skia'
import { IconProps } from './Icon.types'

const Icon: React.FC<Partial<IconProps>> = ({
  name = 'play',
  color = 'white',
  size = 24,
}) => {
  return (
    <View w={size} h={size}>
      <Canvas style={{ flex: 1 }}>
        <FitBox
          src={rect(0, 0, 24, 24)}
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
}

export default Icon
