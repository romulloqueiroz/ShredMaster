import { atom } from 'recoil'

// Atoms for tabata timer parameters
const playTimeAtom = atom({
  key: 'playTimeAtom',
  default: 20, // default play time in seconds
})

const restTimeAtom = atom({
  key: 'restTimeAtom',
  default: 10, // default rest time in seconds
})

// Atoms for metronome parameters
const bpmAtom = atom({
  key: 'bpmAtom',
  default: 120, // default beats per minute
})

const activeAtom = atom({
  key: 'activeAtom',
  default: false, // metronome is initially inactive
})

const exercisesState = atom({
  key: 'exercises',
  default: [],
})

const metronomeState = atom({
  key: 'metronome',
  default: {
    isPlaying: false,
  },
})

export {
  playTimeAtom,
  restTimeAtom,
  bpmAtom,
  activeAtom,
  exercisesState,
  metronomeState,
}
