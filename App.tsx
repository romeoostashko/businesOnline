import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import { sessionReduser } from "./store/session/reducer";
import TopTabNanigator from "./routes/TopTabsNavigators";
import { StatusBar } from "expo-status-bar";

import { Purchases } from "./screens/OrdersScreen/index";

const rootReducer = combineReducers({ session: sessionReduser });
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <TopTabNanigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
