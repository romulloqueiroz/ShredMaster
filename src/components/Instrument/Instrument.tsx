import { View } from 'react-native-rom-components'
import { instruments } from '@styles'
import { Canvas, Path, rect, FitBox } from '@shopify/react-native-skia'
import { InstrumentProps } from './Instrument.types'

const Instrument: React.FC<Partial<InstrumentProps>> = ({ name = 'guitar', size = 24 }) => {
  const pairs = instruments[name] || []
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

export default Instrument
