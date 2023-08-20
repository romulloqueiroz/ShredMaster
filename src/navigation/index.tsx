import { Routes } from './routes/Routes'
import { NavigationContainer } from '@react-navigation/native'
import { useLoadExercises } from '@hooks'

const Navigation = () => {
  useLoadExercises()
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export {
  Navigation
}
