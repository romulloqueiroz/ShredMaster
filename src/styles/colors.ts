export type ColorType = typeof colors;
export const colors = {
  'primary.20': '#F1E3FD',
  'primary.50': '#B772F7',
  'primary.60': '#A567DE',

  'gray.10': '#36393F',
  'gray.50': '#444444',
  'gray.100': '#24282E',
  'gray.alpha10': 'rgba(54, 57, 63, 0.96)',

  'purple.100': '#884EF7',

  white: '#FFFFFF',
  transparent: 'transparent',

  'whiteAlpha.5': 'rgba(255, 255, 255, 0.05)',
  'whiteAlpha.10': 'rgba(255, 255, 255, 0.12)',
  'whiteAlpha.40': 'rgba(255, 255, 255, 0.38)',
  'whiteAlpha.60': 'rgba(255, 255, 255, 0.6)',
  'whiteAlpha.80': 'rgba(255, 255, 255, 0.87)',

  'red.90': '#C4475A',
  'red.100': '#B04051',

  // Colors not present on the stylesheet.
  'black.212121': '#212121',
  'black.3E434E': '#3E434E',

  'green.999': '#04D900',

  'black.1': '#23262B',
  'black.2': '#373B45',
  'black.3': '#535966',
  'black.4': '#3E434E',
  'pink.1': '#D943F8',
  'pink.2': '#DE43F8',
  'purple.1': '#7E39B4',
  'blue.1': '#54CEF5',
  'blue.2': '#54F5F5',
  'blue.3': '#4355F8',
  'blue.4': '#5E43F5',
  'blue.5': '#5E43F6',
  'orange.1': '#F58E54',
  'green.1': '#67F843',

  // New beta colors
  purple: '#684485',
  black: '#121212',
} as const;
