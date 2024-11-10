export const SCREENS = {
  HOME: 'HomeScreen',
  LOGIN: 'LoginScreen',
  PROFILE: 'ProfileScreen',
  SETTINGS: 'SettingsScreen',
} as const;

export type ScreenNames = (typeof SCREENS)[keyof typeof SCREENS];
