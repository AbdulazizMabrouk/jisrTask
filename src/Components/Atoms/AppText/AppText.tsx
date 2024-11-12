import React from 'react';
import {Text, TextInputProps} from 'react-native';

interface AppTextProps {
  children: string | string[];
  style?: TextInputProps;
}
export const AppText = ({children, style}: AppTextProps) => {
  return <Text style={style}>{children}</Text>;
};
