import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

const TodoListApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    } else {
      alert("Task cannot be empty!");
    }
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = updatedTask;
    setTasks(updatedTasks);
  };

  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Todo's</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#BABABA"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text color="#202020" style={styles.buttonText}>
            Add Task
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[styles.taskItem, item.completed && styles.completedTask]}
          >
            <TextInput
              style={[styles.taskText, item.completed && styles.completedText]}
              value={item.text}
              onChangeText={(text) => editTask(index, text)}
              editable={!item.completed}
            />
            <TouchableOpacity
              style={styles.checkButton}
              onPress={() => toggleCompleted(index)}
            >
              <Text color="#202020" style={styles.buttonText}>
                {item.completed ? "✓" : "Done"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeTask(index)}
            >
              <Text color="#202020" style={styles.buttonText}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.footerText}>vsb.uidev - © 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#202020",
  },
  title: {
    fontSize: 32,
    fontWeight: "semibold",
    padding: 16,
    textAlign: "center",
    color: "#BABABA",
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
    color: "#BABABA",
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 8,
  },
  input: {
    flex: 1,
    height: 56,
    borderColor: "#373737",
    color: "#BABABA",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#626ED9",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#202020",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    borderColor: "#373737",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
  taskText: {
    flex: 1,
    fontSize: 12,
    color: "#BABABA",
  },
  checkButton: {
    backgroundColor: "#ECBB5B",
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  removeButton: {
    backgroundColor: "#C64444",
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  completedTask: {
    opacity: 0.7,
  },
  completedText: {
    textDecorationLine: "line-through",
  },
});

export default TodoListApp;
