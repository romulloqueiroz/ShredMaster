import { useState } from 'react'
import { deviceWidth } from '@styles'
import { View, Tabata, CircularProgress, Button } from '@components'
import { BaseLayout } from '@layouts'

const PROGRESS_SIZE = deviceWidth * 0.8

const App = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [mode, setMode] = useState<'work' | 'rest'>('work')
  return (
    <BaseLayout>
      <View h='100%' main='center' cross='center' flex1 mt={64}>
        <View h={62} />
        <Tabata />
        {/* <CircularProgress 
          size={PROGRESS_SIZE} 
          duration={5}
          color={mode === 'work' ? 'green' : 'red'}
          strokeWidth={20} 
          isPlaying={isRunning}
          mode={mode}
        /> */}
        <View h={32} />
        {/* <Button 
          onPress={() => setIsRunning(!isRunning)} 
          title={isRunning ? 'Stop' : 'Start'} 
        />
        <Button 
          onPress={() => setMode(mode === 'work' ? 'rest' : 'work')} 
          title={mode === 'work' ? 'Rest' : 'Work'} 
        /> */}
      </View>
    </BaseLayout>
  )
}

export default App
