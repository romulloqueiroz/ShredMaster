import { View, Scroll } from 'components/Design';
import { deviceWidth, deviceHeight, colors } from 'styles';
import { Canvas, vec, LinearGradient, Rect } from '@shopify/react-native-skia';

interface BaseLayoutProps {
  playCardShown?: boolean;
  type?: typeof Scroll | typeof View;
  view?: boolean;
  ph?: number;
}

const BaseLayout: React.FCX<BaseLayoutProps> = ({
  children,
  view = false,
  ph = 16,
  type: Container = view ? View : Scroll,
}) => (
  <View flex1>
    <View absolute bgc="gray.100" w="100%" h="100%">
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={deviceWidth} height={deviceHeight}>
          <LinearGradient
            start={vec(deviceWidth, 0)}
            end={vec(0, deviceHeight / 1.5)}
            colors={[colors.purple, colors.black, colors.black]}
          />
        </Rect>
      </Canvas>
    </View>
    <Container ph={ph} flex1 hideIndicator>
      {children}
    </Container>
  </View>
);

export default BaseLayout;
