import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import React, { FC } from "react";

const { width, height } = Dimensions.get("screen");

interface Props {
  placeholder: string;
  onChange?: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
}

const Input: FC<Props> = (props) => {
  return (
    <View style={{
      marginBottom: 30
    }}>
      <Text style={{
        color:'#fff',
        marginBottom: 5,
        fontSize: 16
      }}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        secureTextEntry={props.secureTextEntry || false}
        style={styles.input}
        placeholderTextColor='#c4c4c4'
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: width * 0.8,
    paddingLeft: 10,
    backgroundColor: "#1f2e4d",
    color: "#c4c4c4",
    height: 46,
    borderRadius: 5
  }
});
