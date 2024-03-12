import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [...currentGoals, goalText]);
  }

  function deleteItem(index) {
    const newGoals = goals.filter((el, i) => i != index);
    setGoals(newGoals);
  }

  function startGoalHandler() {
    setIsModalVisible(true);
  }

  function closeGoalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          color="#a070d6"
          title="Add New Goal"
          onPress={startGoalHandler}
        />
        <GoalInput
          onClose={closeGoalHandler}
          visible={isModalVisible}
          onAddGoal={addGoalHandler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item}
                  onDelete={() => deleteItem(itemData.index)}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1a0037",
  },
  goalContainer: {
    flex: 4,
  },
});
