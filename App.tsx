import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { sessionReduser } from "./store/session/reducer";
import DrawerNavigator from "./routes/DrawerStack";
import { StatusBar } from "expo-status-bar";

import { Purchases } from "./screens/OrdersScreen/index";

const rootReducer = combineReducers({ session: sessionReduser });
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <DrawerNavigator />
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
