import { colors } from './colors';

export type GradientType = keyof typeof gradient;
export const gradient = {
  black: [colors['black.1'], colors['black.2']],
  black2: [colors['black.1'], colors['black.2']],
  black3: [colors['black.1'], colors['black.3']],
  black4: [colors['black.4'], colors['black.3']],
  primary: [colors['pink.1'], colors['purple.100']],
  secondary: [colors['blue.3'], colors['blue.1']],
  tertiary: [colors['black.2'], colors['orange.1']],
  green: [colors['green.1'], colors['blue.2']],
  progress: [colors['purple.1'], colors['blue.4']],
  progressBorder: [colors['purple.1'], colors['blue.5']],
};
