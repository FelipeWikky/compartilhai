/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface MainParamList extends MainStackParamList {}
  }
}

export type MainStackParamList = {
  Home: undefined;
  NotFound: undefined;
};

export type MainStackScreenProps<Screen extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  Screen
>;

// export type MainTabScreenProps<Screen extends keyof MainStackParamList> = CompositeScreenProps<
//   BottomTabScreenProps<MainStackParamList, Screen>,
//   NativeStackScreenProps<MainStackParamList>
// >;
