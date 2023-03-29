import { icon, IconType } from './icons'
import { colors, ColorType } from './colors'
import { gradients, GradientsType } from './gradients'
import { shadows, ShadowsType } from './shadows'
import { ViewType } from './types'
import { FontWeight, FontSize, LineHeight, getLineHeight } from './fonts'
import {
  os,
  screenHeight,
  screenWidth,
  deviceHeight,
  deviceWidth,
  statusBar,
  statusBarHeight,
  navigationBarHeight,
} from './dimensions'

export {
  os,
  shadows,
  screenHeight,
  screenWidth,
  deviceHeight,
  deviceWidth,
  statusBar,
  getLineHeight,
  statusBarHeight,
  navigationBarHeight,
  gradients,
}

export { icon, colors }
export type {
  IconType,
  ViewType,
  FontWeight,
  FontSize,
  LineHeight,
  ColorType,
  ShadowsType,
  GradientsType,
}
