import React from "react";
import { View, StyleSheet } from "react-native";

export const CentrendWrapper = ({ children }: any) => {
  return <View style={styles.CentrendWrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  CentrendWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
