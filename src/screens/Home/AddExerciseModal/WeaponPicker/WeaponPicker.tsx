import { View, Text, Instrument, Touchable } from '@components'
import { InstrumentsType } from '@styles'
import { useState } from 'react'

const weapons = ['guitar', 'bass', 'keyboard', 'drums']

interface WeaponPickerProps {
  onInstrumentSelected: (color: keyof InstrumentsType) => void
}

export const WeaponPicker: React.FC<WeaponPickerProps> = ({ onInstrumentSelected }) => {
  const [active, setActive] = useState(weapons[0] as keyof InstrumentsType)

  const handleInstrumentSelected = (instrument: keyof InstrumentsType) => {
    setActive(instrument)
    onInstrumentSelected(instrument)
  }

  return (
    <>
      <View row>
        <Text mb={12}>Pick a weapon: </Text>
        <Text color='subtitle'>{active as string}</Text>
      </View>
      <View row main='space-between'>

        {weapons.map((weapon) => (
          <Touchable
            key={weapon}
            br={4}
            bw={active === weapon ? 2 : 0}
            bc='white'
            bgc='glass1'
            onPress={() => handleInstrumentSelected(weapon as keyof InstrumentsType)}
          >
            <Instrument
              size={64}
              name={weapon as InstrumentsType} />
          </Touchable>
        ))}

      </View>
    </>
  )
}
