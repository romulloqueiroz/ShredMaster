import { View, Text, ColorTag } from '@components'
import { GradientsType } from '@styles'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { COLOR_LIST, SLICE } from './ColorPicker.utils'

interface ColorPickerProps {
  onColorSelected: (color: keyof GradientsType) => void
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ onColorSelected }) => {
  const [active, setActive] = useState(COLOR_LIST[0] as keyof GradientsType)

  const handleColorSelected = (color: keyof GradientsType) => {
    setActive(color)
    onColorSelected(color)
  }

  return (
    <>
      <Text mb={8}>Pick a color:</Text>
      <FlatList
        data={COLOR_LIST.slice(0, SLICE)}
        renderItem={({ item }) => (
          <ColorTag
            color={item as keyof GradientsType}
            size={32}
            onPress={() => handleColorSelected(item as keyof GradientsType)}
            active={active === item} 
          />
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View mh={4} />} 
      />
    </>
  )
}

