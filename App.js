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

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [...currentGoals, goalText]);
  }

  function deleteItem(index) {
    const newGoals = goals.filter((el, i) => i != index);
    setGoals(newGoals);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalContainer: {
    flex: 4,
  },
});
