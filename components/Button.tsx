import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";

interface Props {
  title: string;
  onPress: () => void;
  outine?: boolean;
  style?: any
}
const Button: FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: props.outine ? "transparent" : "#3554ed",
          borderWidth: props.outine ? 1 : 0,
          ...props.style
        }
      ]}
      onPress={props.onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color: props.outine ? "#3554ed" : "#fff"
          }
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#3554ed",
    padding: 10,
    width: '30%',
    marginBottom: 15
  },
  text: {
    fontSize: 16,
    fontWeight: "700"
  }
});
