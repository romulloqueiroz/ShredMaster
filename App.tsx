import { Text } from 'react-native';
import { View } from '@components';
import { BaseLayout } from '@layouts';

export default function App() {
  return (
    <BaseLayout>
      <View main='center' cross='center' flex1 bw={2} bc='red'>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </BaseLayout>
  );
}
