import { View, Scroll } from '@components';

interface BaseLayoutProps {
  type?: typeof Scroll | typeof View;
  view?: boolean;
  ph?: number;
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  view = false,
  ph = 16,
  type: Container = view ? View : Scroll,
}) => (
  <Container ph={ph} flex1 bgc="background" hideIndicator>
    {children}
  </Container>
);

export default BaseLayout;
