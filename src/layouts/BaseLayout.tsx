// import { PlayCard } from 'components/PlayCard';
// import { ScrollView, View } from 'native-base';
import { View, Scroll } from 'components/Design';

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
  <Container ph={ph} flex1 bgc="black" hideIndicator>
    {children}
  </Container>
);

export default BaseLayout;

/* {playCardShown && <PlayCard />} */
