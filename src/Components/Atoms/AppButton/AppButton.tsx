import React from 'react';
import {StyleSheet, GestureResponderEvent, Pressable} from 'react-native';
import {AppText} from '../AppText/AppText';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
  backgroundColor?: string;
}

const AppButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  color = '#fff',
  backgroundColor = '#007AFF',
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, {backgroundColor}]}>
      <AppText style={[styles.buttonAppText, {color}]}>{title}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AppButton;
