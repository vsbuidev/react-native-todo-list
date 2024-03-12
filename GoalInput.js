import { View, TextInput, Button, Modal, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText);
    props.onClose();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("./assets/Goal.png")} />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Type your goal"
        />
        <View style={styles.buttonContaier}>
          <View style={styles.button}>
            <Button color="#f31282" onPress={props.onClose} title="Cancel" />
          </View>
          <View style={styles.button}>
            <Button color="#5e0acc" onPress={addGoalHandler} title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 24,
    flex: 1,
    padding: 16,
    backgroundColor: "#1a0037",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
  },
  buttonContaier: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    margin: "100",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
