import { AccessibilityRole } from 'react-native';
import { ViewType } from '@styles';

export interface TouchableProps extends ViewType {
  opacity: number;
  onPress: () => void;
  disabled?: boolean;
  accessibilityRole?: AccessibilityRole;
}
