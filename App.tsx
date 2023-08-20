import { useFonts } from 'expo-font'
import { Navigation } from '@navigation'
import { RecoilRoot } from 'recoil'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const useLoading = () => {
  const [fontsLoaded] = useFonts({
    FilsonProBold: require('./src/assets/fonts/FilsonProBold.otf'),
    FilsonProRegular: require('./src/assets/fonts/FilsonProRegular.otf'),
  })

  if (!fontsLoaded) return false
  return fontsLoaded
}

const App = () => {
  const isLoadingComplete = useLoading()

  return (
    <>
      {isLoadingComplete && (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RecoilRoot>
            <Navigation />
          </RecoilRoot>
        </GestureHandlerRootView>
      )}
    </>
  )
}

export default App
