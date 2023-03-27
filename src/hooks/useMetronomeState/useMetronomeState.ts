import { useRecoilValue } from 'recoil'
import { metronomeState } from '@state'

export const useMetronomeState = () => useRecoilValue(metronomeState)
