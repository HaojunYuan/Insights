import React, { useContext } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Context, { NewsContext } from "./API/Context";
import InshortTabs from "./components/InshortTabs";
import Constants from 'expo-constants';

function App() {
  const { darkTheme } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    >
      <InshortTabs />
    </View>
  );
}

const statusBarHeight = Constants.statusBarHeight || 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
