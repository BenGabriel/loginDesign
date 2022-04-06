import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Splash: FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 150,
          height: 150,
          alignItems: "center",
          marginTop: 50
        }}
      >
        <Image
          source={require("../assets/data.png")}
          resizeMode="contain"
          style={styles.imageContainer}
        />
        <Text
          style={{
            color: "#3558da",
            fontSize: 30,
            fontWeight: "bold",
            letterSpacing: 2,
            marginTop: -10
          }}
        >
          Data me.
        </Text>
        <Text
          style={{
            color: "#3558da",
            fontSize: 16,
            marginTop: -5
          }}
        >
          Know yourself better
        </Text>
      </View>
      <Bottom height={500} backgroundColor="#f1f2f6" />
      <Bottom height={400} backgroundColor="#e8e9ed" />
      <Bottom
        height={300}
        backgroundColor="#0f1f41"
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button title="Log In" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Register")}
          outine={true}
          style={{
            marginBottom: 30
          }}
        />
      </Bottom>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    alignItems: "center"
  },
  imageContainer: {
    width: "100%",
    height: "100%"
  }
});
