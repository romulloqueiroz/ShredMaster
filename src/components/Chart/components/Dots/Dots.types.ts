import { buildGraph } from '../../utils';
import { GradientsType } from '@styles';

export interface DotsProps {
  chartWidth: number;
  color: keyof GradientsType;
  graphs: ReturnType<typeof buildGraph>;
}
