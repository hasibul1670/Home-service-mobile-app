import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "40px",
  },
});
