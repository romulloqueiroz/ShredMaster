export interface InputProps {
  value: string;
  onChangeText: (text: string | number) => void;
  placeholder?: string;
  numeric?: boolean;
  timer?: boolean;
  title: string;
}
