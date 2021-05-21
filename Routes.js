import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import * as Font from "expo-font";
import Register from "./Register";
import TodoList from "./TodoList";
import Profile from "./Profile";

const Home = () => <Profile />;

const About = () => <Register />;

const Topic = () => <TodoList />;

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Profile Image</Text>
        </Link>
        <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Register</Text>
        </Link>
        <Link to="/topic" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Todo List</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topic" component={Topic} />
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default App;
