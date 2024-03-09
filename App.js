import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Type your goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text> List of Goals </Text>
      </View>
      {/* <Text style={styles.dummyText}>Hello World from VSB</Text>
      <View>
        <Text style={styles.dummyText}>Sample Text 2</Text>
      </View>
      <Button title="Tap me" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // dummyText: {
  //   margin: 16,
  //   borderWidth: 2,
  //   borderColor: "red",
  //   padding: 16,
  // },
});
