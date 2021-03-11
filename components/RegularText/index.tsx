import React from "react";
import { Text, StyleSheet } from "react-native";

export const RegularText = ({ children }: any) => {
  return <Text>{children}</Text>;
};

const styles = StyleSheet.create({ text: {} });
