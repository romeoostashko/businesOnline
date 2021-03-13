import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { CentrendWrapperRow, RegularText, RowOrder } from "../../components";

export const OrdersScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.session.customers);

  return (
    <View style={styles.container}>
      <RowOrder navigation={navigation} />
      <RowOrder navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginHorizontal: 5,
    marginTop: 7,
  },
});
