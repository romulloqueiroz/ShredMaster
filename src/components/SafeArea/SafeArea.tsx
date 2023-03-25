import React from 'react'
import View from '../View/View'
import { SafeAreaView } from 'react-native'
import { os, statusBarHeight } from '@styles'

const SafeArea = () => <>{os === 'ios' ? <SafeAreaView /> : <View mb={statusBarHeight} />}</>

export default SafeArea
