import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import {
  getOrdersDB,
  getProducts,
  deleteOrder,
  getUsers,
} from "../../store/session/actions";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { RowOrder } from "../../components";
import { theme } from "../../theme";
import { RegularText } from "../../components/RegularText/RegularText";

export const OrdersScreen = ({ navigation }) => {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const ord = useSelector((state: object) => state.session.orders);
  const products = useSelector((state: object) => state.session.products);

  const [ordersFormat, setOrdersFormat] = useState([]);

  const getOrders = () => {
    getOrdersDB((x) => setLoad(x))(dispatch);
    getProducts((x) => setLoad(x))(dispatch);
    getUsers((x) => setLoad(x))(dispatch);
  };

  useEffect(() => {
    navigation.setParams({ getOrdersDB: getOrders });
  }, []);

  useEffect(() => {
    getOrdersDB((x) => setLoad(x))(dispatch);
    getProducts((x) => setLoad(x))(dispatch);
    getUsers((x) => setLoad(x))(dispatch);
  }, []);

  useEffect(() => {
    if (Object?.keys(ord)?.length > 0) {
      const arr = Object.entries(ord).reverse();
      console.log(arr);
      setOrdersFormat(arr);
    }
  }, [ord]);

  let renderData = (
    <View style={styles.centred}>
      <RegularText fontSize={18} color="white">
        У вас ще немає замовлень
      </RegularText>
    </View>
  );

  if (ordersFormat.length > 0) {
    renderData = (
      <FlatList
        data={ordersFormat}
        keyExtractor={() => Math.random()}
        renderItem={(data) => {
          return (
            <RowOrder
              isOrder
              deleteActionById={deleteOrder}
              navigationPath="DetailOrder"
              navigation={navigation}
              name={data.item[1].name}
              id={data.item[0]}
              totalPrice={data.item[1].totalPrice}
              isSheep={data.item[1].isSheep}
              isGiven={data.item[1].isGiven}
              isPaid={data.item[1].isPaid}
              profit={data.item[1].profit}
            />
          );
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ flex: 0.3 }}>Прибуток</Text>
        <Text style={{ flex: 0.2 }}>Ім'я</Text>
        <Text style={{ flex: 0.1 }}>Опл.</Text>
        <Text style={{ flex: 0.2 }}>Достав.</Text>
        <Text style={{ flex: 0.2 }}>Ціна</Text>
      </View>
      {!load ? (
        <View style={styles.centred}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        renderData
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "#808080",
    flex: 1,
    marginHorizontal: 0,
    marginTop: 0,
  },
  top: {
    height: 30,
    backgroundColor: "white",
    marginHorizontal: 2,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  centred: { justifyContent: "center", alignItems: "center", flex: 1 },
});

OrdersScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="reload"
          iconName="reload"
          onPress={() => navigation.getParam("getOrdersDB")()}
        ></Item>
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="menu"
          iconName="menu"
          onPress={() => navigation.toggleDrawer()}
        ></Item>
      </HeaderButtons>
    ),
  };
};
