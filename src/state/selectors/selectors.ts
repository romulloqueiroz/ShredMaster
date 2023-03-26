import { selector } from 'recoil'
import { activeAtom, restTimeAtom, playTimeAtom } from '../atoms/atoms'

// Selector to determine if the tabata timer is in "play" mode
export const isPlayingSelector = selector({
  key: 'isPlayingSelector',
  get: ({ get }) => {
    const active = get(activeAtom)
    const rest = get(restTimeAtom)
    const play = get(playTimeAtom)

    return active && rest < play
  },
})