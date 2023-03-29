import { buildGraph } from '../../utils';

export interface EntriesBoxProps {
  graphs: ReturnType<typeof buildGraph>;
  padding: number;
}
