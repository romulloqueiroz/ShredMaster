import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { View } from '@components';

export default function App() {
  return (
    <View main='center' cross='center' flex1>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
