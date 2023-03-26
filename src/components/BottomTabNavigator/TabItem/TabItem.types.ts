/* eslint-disable @typescript-eslint/no-explicit-any */
import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/src/types';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
export interface TabItemProps {
  onTabPress: (route: any, index: number) => void;
  index: number;
  itemWidth: number;
  route: any;
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
}
