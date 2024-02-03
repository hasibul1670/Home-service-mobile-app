import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ColorCode from "../../Utiles/ColorCode";

export default function Login() {
  const onPress = () => {
    console.log("Hello World");
  };

  return (
    <View style={{ marginTop: 200, alignItems: "center" }}>
      <Image
        source={require("../../../assets/icon.png")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>
          Let's Find
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Professional Home and Repair{" "}
          </Text>
          Services
        </Text>

        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            color: ColorCode.WHITE,
            marginTop: 20,
          }}
        >
          Best App to Find Services new you! which deliver you a professional
          Services
        </Text>

        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
          <Text
            style={{
              textAlign: "center",
              color: ColorCode.PRIMARY,
              fontWeight: "bold",
            }}
          >
            {" "}
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 150,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: ColorCode.BROWN,
  },
  subContainer: {
    width: "100%",
    height: "70%",
    padding: 20,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: ColorCode.PRIMARY,
  },
  textStyle: {
    fontSize: 27,
    marginTop: 10,
    padding: 10,
    textAlign: "center",
    color: ColorCode.WHITE,
  },
  buttonStyle: {
    fontSize: 17,
    marginTop: 40,
    borderRadius: 99,
    padding: 15,
    backgroundColor: ColorCode.WHITE,
  },
});
