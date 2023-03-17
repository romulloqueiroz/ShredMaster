import { StyleProp, TextStyle } from 'react-native';
import { LineHeight } from 'src/styles/fonts';
import { FontWeight, FontSize, ColorType } from '@styles';

interface TextComponentProps {
  children: React.ReactNode;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  size?: FontSize;
  color?: keyof ColorType;
  width?: number | string;
  style?: StyleProp<TextStyle>;
  center?: boolean;
  mb?: number;
  mt?: number;
  ml?: number;
  flex1?: boolean;
  noLineHeight?: boolean;
  spacing?: number;
}

export type { TextComponentProps };
