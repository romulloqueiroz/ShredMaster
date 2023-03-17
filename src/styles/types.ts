import { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import { ColorType } from './colors';
export interface ViewType {
  children: React.ReactNode;

  // paddings
  ph: number;
  pv: number;
  pl: number;
  pr: number;
  pt: number;
  pb: number;
  p: number;

  // margins
  mh: number;
  mv: number;
  ml: number;
  mr: number;
  mt: number;
  mb: number;
  m: number;

  // sizes
  h: number | string;
  w: number | string;

  // border radius
  br: number;

  // border top left radius
  btlr: number;

  // border top right radius
  btrr: number;

  // border bottom left radius
  bblr: number;

  // border bottom right radius
  bbrr: number;

  // border width
  bw: number;

  // bordercolor
  bc: keyof ColorType;

  // circle
  round: number;

  // background color
  bgc: keyof ColorType;

  // flex
  flex: number;
  flex1: boolean;

  // flexbox
  row: boolean;
  main: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around';
  cross: 'flex-start' | 'center' | 'flex-end';

  // overflow
  overflow: 'hidden' | 'visible' | 'scroll';
  overflowHidden: boolean;

  // pointer events
  pointerEvents?: 'auto' | 'none' | 'box-none' | 'box-only' | undefined;

  // position
  position: 'absolute' | 'relative';
  absolute: boolean;
  x: number;
  rx: number; // right x
  y: number;
  by: number; // bottom y

  style: StyleProp<ViewStyle>;

  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}
