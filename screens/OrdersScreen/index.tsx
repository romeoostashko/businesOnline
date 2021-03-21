import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { RowOrder } from "../../components";
import { TouchableNFWrapper } from "../../components/TouchableNFWrapper/TouchableNFWrapper";
import Test from "../../components/Test";
import { DetailOrderScreen } from "../DetailOrderScreen";

export const OrdersScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state: object) => state.session.orders);
  console.log(orders);

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={(data) => (
          <RowOrder
            navigation={navigation}
            name={data.item.name}
            id={data.item.id}
            totalPrice={data.item.totalPrice}
            isSheep={data.item.isSheep}
            isGiven={data.item.isGiven}
            isPaid={data.item.isPaid}
          />
        )}
      />

      <ScrollView>
        <TouchableNFWrapper
          backgroundFeedback="#ccc"
          height={50}
          borderRadius={12}
          width={"100%"}
          backgroundColor="#fff"
          elevation={0}
          marginBottom={5}
          onPress={() => {
            DetailOrder.current.open();
          }}
        >
          <Text>Hi</Text>
        </TouchableNFWrapper>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 5,
    marginTop: 7,
  },
});
