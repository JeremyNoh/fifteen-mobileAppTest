import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import images from '../../assets/images';

interface Props {
  name: string;
  // type?: 'text' | 'password' | 'number' | 'date';
  onChange: (value: string) => void;
  style?: TextStyle;
  styleContainer?: ViewStyle;
  placeholder?: string;
  value?: string | null | undefined;
  secureTextEntry?: boolean;
  keyboardType?: 'numeric';
  autoComplete?:
    | 'email'
    | 'name'
    | 'password'
    | 'postal-code'
    | 'tel'
    | 'username';
}

const Input: React.FC<Props> = ({
  name,
  // type,
  onChange,
  style,
  styleContainer,
  placeholder,
  value,
  autoComplete,
  keyboardType,
  secureTextEntry = false,
}) => {
  const [textIsHidding, settextIsHidding] = useState(secureTextEntry);
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={styles.title}>{name}</Text>
      <TextInput
        onChangeText={valueChange => onChange(valueChange)}
        placeholder={placeholder}
        style={[styles.input, secureTextEntry && styles.inputWithIcon, style]}
        value={value || ''}
        autoComplete={autoComplete}
        keyboardType={keyboardType}
        secureTextEntry={textIsHidding}
      />
      {secureTextEntry === true && (
        <TouchableOpacity
          style={[
            styles.containerImageEye,
            {
              top:
                (styleContainer && styleContainer.height
                  ? Number(styleContainer.height) / 2
                  : 40 / 2) - 10,
            },
          ]}
          onPress={() => {
            settextIsHidding(!textIsHidding);
          }}>
          <Image
            source={textIsHidding ? images.eyeClose : images.eye}
            style={styles.imageEye}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 13,
    height: 40,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 25,
    marginTop: 13,
  },
  title: {
    position: 'absolute',
    left: 20,
    top: -10,
    backgroundColor: 'white',
    paddingVertical: 0,
    paddingHorizontal: 5,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 14,
    color: '#707070',
  },
  input: {
    border: 'none',
    width: '100%',
    height: '95%',
    borderRadius: 13,
    paddingLeft: 10,
  },
  inputWithIcon: {
    paddingRight: 33,
  },
  containerImageEye: {
    position: 'absolute',
    right: 10,
    width: 20,
    height: 20,
  },
  imageEye: {
    height: '100%',
    width: '100%',
  },
});
