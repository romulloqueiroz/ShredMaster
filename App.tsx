import { View, Text } from '@components';
import { BaseLayout } from '@layouts';

const App = () => {
  return (
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 bw={2} bc='red' mt={62}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </BaseLayout>
  );
}

export default App;
