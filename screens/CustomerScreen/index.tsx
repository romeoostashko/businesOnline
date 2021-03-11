import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

export const CustomerScreen = (props) => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.session.customers);

  return (
    <View>
      <Text>This is customers</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
