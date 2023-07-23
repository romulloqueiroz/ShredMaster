import { View } from 'react-native-rom-components'
import { shredders } from '@styles'
import { Canvas, Path, rect, FitBox } from '@shopify/react-native-skia'
import { ShredderProps } from './Shredder.types'

const Shredder: React.FC<Partial<ShredderProps>> = ({ name = 'starter', size = 24 }) => {
  const pairs = shredders[name] || []
  return (
    <View w={size} h={size}>
      <Canvas style={{ flex: 1 }}>
        <FitBox
          src={rect(0, 0, 300, 300)}
          dst={rect(0, 0, size, size)}
        >
          {pairs.map((pair: string, idx: number) => {
            if (idx % 2 === 0) {
              return (
                <Path
                  key={idx}
                  path={pairs[idx + 1]}
                  color={pair}
                />
              )
            }
          })}
        </FitBox>
      </Canvas>
    </View>
  )
}

export default Shredder
