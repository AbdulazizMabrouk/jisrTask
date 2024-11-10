export const StackNames = {
  HOME: 'HomeStack',
  PROFILE: 'ProfileStack',
  SETTINGS: 'SettingsStack',
} as const;

export type StackNamesTypes = (typeof StackNames)[keyof typeof StackNames];
