import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Input from "../components/Input";
import Icon from "@expo/vector-icons/Ionicons";

const Register: FC = (props: any) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={styles.top}>
          <Pressable
            onPress={() => props.navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: -50
            }}
          >
            <Icon name="arrow-back" color="#fff" size={20} />
            <Text style={{ color: "#fff", marginLeft: 5, fontSize: 16 }}>
              Back
            </Text>
          </Pressable>
          <Text style={styles.loginText}>Sign Up</Text>
        </View>
        <View
          style={{
            marginRight: 30,
            backgroundColor: "#f3f4f8",
            padding: 6,
            borderRadius: 5
          }}
        >
          <Icon name="information-circle-outline" color="#000" size={20} />
        </View>
      </View>

      <Bottom
        height={650}
        backgroundColor="#0f1f41"
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Input label="Email or phone number" placeholder="Type here..." />
        <Input label="Password" placeholder="Type here..." />
        <Input label="Confirm Password" placeholder="Type here..." />
        <Input label="Name or pseudo" placeholder="Type here..." />
        <Button title="Sign Up" onPress={() => console.log("hi")} />
      </Bottom>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  top: {
    backgroundColor: "#3255ed",
    width: "70%",
    height: 150,
    borderBottomEndRadius: 200,
    borderBottomStartRadius: 150,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -50
  },
  loginText: {
    marginLeft: -30,
    fontSize: 24,
    color: "#fff",
    marginTop: 5,
    fontWeight: "bold"
  }
});
