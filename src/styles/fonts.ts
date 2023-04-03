const sizeArray = [40, 32, 24, 20, 18, 16, 14, 12, 10] as const

export type FontSize = (typeof sizeArray)[number]
export type LineHeight = 'normal' | 'dense' | 'comfort'

export type FontWeight = keyof typeof fontWeight
const fontWeight = {
  normal: 'FilsonProRegular',
  medium: 'FilsonProMedium',
  bold: 'FilsonProBold',
}

export const getLineHeight = ({
  lineHeight,
  size,
}: {
  lineHeight?: LineHeight
  size: FontSize
}) => {
  switch (lineHeight) {
    case 'dense':
      return size
    case 'comfort':
      return size * 2
    case 'normal':
    default:
      return undefined
  }
}
