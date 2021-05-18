import { StyleSheet, View } from "react-native";
import React from "react";
import Register from "./Register.js";
import TodoList from "./TodoList";
export default function App() {
  return (
    <View>
      <Register />
      <TodoList />
    </View>
  );
}
