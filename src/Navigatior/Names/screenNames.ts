export const SCREENS = {
  HOME: 'HomeScreen',
  LOGIN: 'LoginScreen',
  CATEGORY_LIST: 'CategoryList',
  SETTINGS: 'SettingsScreen',
} as const;

export type ScreenNames = (typeof SCREENS)[keyof typeof SCREENS];
