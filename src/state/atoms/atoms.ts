import { atom } from 'recoil'



export type Exercise = {
  id: number;
  name: string;
};

const exercisesState = atom<Exercise[]>({
  key: 'exercises',
  default: [],
})

export {
  exercisesState,
}
