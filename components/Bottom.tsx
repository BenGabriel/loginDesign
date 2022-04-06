import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { FC } from "react";

const { width, height } = Dimensions.get("screen");

interface Props {
  height: number;
  backgroundColor: string;
  style?: any;
}

const Bottom: FC<Props> = (props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor,
          height: props.height,
          ...props.style
        }
      ]}
    >
      {props.children}
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: width + 100,
    borderTopStartRadius: 300,
    borderTopEndRadius: 300,
    alignSelf: "center",
    bottom: -80
  }
});
