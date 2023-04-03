import { View, Text, Instrument, Touchable } from '@components';
import { InstrumentsType } from '@styles';
import { useState } from 'react';

const weapons = ['guitar', 'bass', 'keyboard', 'drums'];
export const WeaponPicker = () => {
  const [active, setActive] = useState(weapons[0] as keyof InstrumentsType);
  return (
    <View mb={12}>
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
            onPress={() => setActive(weapon as keyof InstrumentsType)}
          >
            <Instrument
              size={64}
              name={weapon as InstrumentsType} />
          </Touchable>
        ))}

      </View>
    </View>
  );
};
