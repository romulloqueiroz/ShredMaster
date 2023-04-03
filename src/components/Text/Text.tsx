import { Text } from 'react-native'
import { colors, getLineHeight } from '@styles'
import { TextComponentProps } from './Text.types'

const TextComponent = ({
  children,
  weight = 'bold',
  lineHeight,
  color = 'white',
  width,
  center,
  mb,
  mt,
  ml,
  noLineHeight = false,
  size = 14,
  flex1,
  spacing = 6,
  style,
}: TextComponentProps) => (
  <Text
    style={[
      {
        fontWeight: weight,
        textAlign: center ? 'center' : 'left',
        color: colors[color],
        width,
        fontSize: size,
        lineHeight: noLineHeight ? 0 : getLineHeight({ lineHeight, size }),
        marginBottom: mb,
        marginTop: mt,
        marginLeft: ml,
        alignItems: 'center',
        flex: flex1 ? 1 : undefined,
        letterSpacing: (spacing / 100) * size,
      },
      style,
    ]}
  >
    {children}
  </Text>
)

export default TextComponent
