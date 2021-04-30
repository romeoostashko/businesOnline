import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/session/actions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import { RowProduct } from "../../components";

export const AllProductsScreen = ({ navigation }) => {
  const { products } = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  console.log("products All", products);

  const getProductsFn = () => {
    getProducts((x) => setLoad(x))(dispatch);
    console.log("get");
  };

  useEffect(() => {
    getProductsFn();
  }, []);

  useEffect(() => {
    navigation.setParams({ getProductsFn: getProductsFn });
  }, []);

  console.log();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ flex: 0.3 }}>Шт.</Text>
        <Text style={{ flex: 0.4 }}>Назва</Text>
        <Text style={{ flex: 0.3 }}>Прибуток</Text>
        <Text style={{ flex: 0.3 }}>Ціна</Text>
      </View>

      {!load ? (
        <View style={styles.centred}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <FlatList
          data={Object.entries(products)}
          renderItem={({ item }) => (
            <RowProduct
              navigation={navigation}
              name={item[1].name}
              id={item[0]}
              totalPrice={item[1].price}
              numbers={item[1].number}
              profit={item[1].profit}
            />
          )}
        />
      )}

      <View style={styles.addNewProduct}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailProduct", {
              id: "NEW_PRODUCT",
              setLoad: setLoad,
            });
          }}
        >
          <View style={styles.containerAddNewProduct}>
            <Text style={{ fontSize: 30 }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centred: { justifyContent: "center", alignItems: "center", flex: 1 },
  container: {
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "#808080",
    flex: 1,
    marginHorizontal: 0,
    marginTop: 0,
  },
  containerAddNewProduct: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "mediumseagreen",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  addNewProduct: {
    position: "absolute",
    right: 40,
    bottom: 50,
    backgroundColor: "#808080",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 10,
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
});

AllProductsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="reload"
          iconName="reload"
          onPress={() => navigation.getParam("getProductsFn")()}
        ></Item>
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="menu"
          iconName="menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};
