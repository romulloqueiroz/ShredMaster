import { View as RNView } from 'react-native'
import { ViewType, colors } from '@styles'

const View: React.FC<Partial<ViewType>> = ({
  children,
  ph,
  pv,
  pl,
  pr,
  pt,
  pb,
  p,
  mh,
  mv,
  ml,
  mr,
  mt,
  mb,
  m,
  h,
  w,
  br,
  btlr,
  btrr,
  bblr,
  bbrr,
  bw,
  flex,
  flex1,
  round,
  bgc,
  bc,
  row = false,
  main,
  cross,
  pointerEvents,
  overflow,
  overflowHidden = false,
  absolute = false,
  x,
  rx,
  y,
  by,
  style,
  onLayout,
}) => (
  <RNView
    onLayout={onLayout}
    pointerEvents={pointerEvents}
    style={[
      {
        flex,
        overflow,
        padding: p,
        paddingTop: pt,
        paddingLeft: pl,
        paddingRight: pr,
        paddingBottom: pb,
        paddingVertical: pv,
        paddingHorizontal: ph,
        margin: m,
        marginTop: mt,
        marginLeft: ml,
        marginRight: mr,
        marginBottom: mb,
        marginVertical: mv,
        marginHorizontal: mh,
        width: w,
        height: h,
        borderWidth: bw,
        borderRadius: br,
        borderTopLeftRadius: btlr,
        borderTopRightRadius: btrr,
        borderBottomLeftRadius: bblr,
        borderBottomRightRadius: bbrr,
        ...(!!flex1 && !flex && { flex: 1 }),
        ...(!!cross && { alignItems: cross }),
        ...(!!row && { flexDirection: 'row' }),
        ...(bc && { borderColor: colors[bc] }),
        ...(!!main && { justifyContent: main }),
        ...(!!absolute && { position: 'absolute' }),
        ...(!!absolute && x && { left: x }),
        ...(!!absolute && rx && { right: rx }),
        ...(!!absolute && y && { top: y }),
        ...(!!absolute && by && { bottom: by }),
        ...(bgc && { backgroundColor: colors[bgc] }),
        ...(!!overflowHidden && { overflow: 'hidden' }),
        ...(!!round && { height: round, width: round, borderRadius: round / 2 }),
      },
      Array.isArray(style) ? [...style] : style,
    ]}
  >
    {children}
  </RNView>
)

export default View
