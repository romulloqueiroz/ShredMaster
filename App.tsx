import { useFonts } from 'expo-font'
import { Navigation } from '@navigation'
import { RecoilRoot } from 'recoil'

const useLoading = () => {
  const [fontsLoaded] = useFonts({
    FilsonProBold: require('./src/assets/fonts/FilsonProBold.otf'),
    FilsonProMedium: require('./src/assets/fonts/FilsonProMedium.otf'),
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
        <RecoilRoot>
          <Navigation />
        </RecoilRoot>
      )}
    </>
  )
}

export default App
