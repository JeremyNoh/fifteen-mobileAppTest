import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props {
  style?: ViewStyle;
  title: string;
  onPress: () => void;
  disabled?: boolean;
  withoutStyle?: boolean;
  styleText?: TextStyle;
}

const Button: React.FC<Props> = ({
  style,
  title,
  onPress,
  disabled = false,
  withoutStyle = false,
  styleText,
}) => {
  return (
    <TouchableOpacity
      style={[
        !withoutStyle && styles.button,
        style,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 37,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 4,
    borderColor: '#C83130',
    borderStyle: 'solid',
    shadowColor: '#00000029',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.5,
    backgroundColor: '#e4e4e4',
  },
  text: {
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
  },
});
