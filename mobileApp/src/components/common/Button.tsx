import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Button;
