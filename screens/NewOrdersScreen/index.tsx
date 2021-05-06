import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import { Text, View, TouchableOpacity } from "react-native";
import {
  setNewCustomer,
  setNewUser,
  setNewProduct,
} from "../../store/session/actions";
import { Order, NewOrder, User } from "./types";
import { emptyData, emptyNewOrder, emptyUser } from "./constants";
import { RegularText } from "../../components/RegularText/RegularText";
import { Price } from "../DetailOrderScreen/components/Price";
import { Shipping } from "../DetailOrderScreen/components/Shipping";
import { Delivery } from "../DetailOrderScreen/components/Delivery";
import { NameInput } from "../DetailOrderScreen/components/NameInput";

import {
  StyledInput,
  Wrapper,
  WrapperRow,
  WrapperTop,
  Notes,
  WrapperNotes,
  WrapperRowNameOrder,
} from "./styles";
import { TouchableNFWrapper } from "../../components/TouchableNFWrapper/TouchableNFWrapper";

export const NewOrdersScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { orders, users, products } = useSelector((state) => state.session);
  const [data, setData] = useState<Order>(emptyData);
  const [dataNewProduct, setDataNewProduct] = useState<NewOrder>(emptyNewOrder);

  useEffect(() => {
    navigation.setParams({ saveOrder: onSave });
  }, [data]);

  const changeText = (text: string, name: string) => {
    setData({ ...data, [name]: text });
  };

  /* Додаю до корзини */
  const addToCard = () => {
    const arr = Object.entries(dataNewProduct).filter((i) =>
      i[0] === "profit" ? false : true
    );
    console.log("Додаю до корзини..."); /*DEV*/
    if (arr.findIndex((i) => !i[1]) >= 0) {
      console.log(dataNewProduct);
      console.log("Поля (товар, кількість, ціна) не заповнено"); /*DEV*/
      return;
    } else {
      setData({
        ...data,
        products: [...data.products, { ...dataNewProduct }],
        totalPrice:
          +data.totalPrice + +dataNewProduct.price * +dataNewProduct.number,
        profit: +data.profit + +dataNewProduct.profit,
      });
      // перевірка, чи є даний продукт в базі, якщо ні, то дадаємо в products
      if (!products?.find((i) => i.name === dataNewProduct.nameProduct)) {
        setNewProduct({
          name: dataNewProduct.nameProduct,
          price: dataNewProduct.price,
          priceOrigin: dataNewProduct.priceOrigin,
          profit: +dataNewProduct.price - +dataNewProduct.priceOrigin,
          comment: "",
          number: 0,
        })(dispatch);
      }

      setDataNewProduct(emptyNewOrder);
      console.log("Товар успішно додано до корзини +"); /*DEV*/
    }
  };

  const changeTextNewProduct = (text: string, name: string) => {
    setDataNewProduct({
      ...dataNewProduct,
      [name]: text,
      profit:
        name === "number"
          ? (
              (+dataNewProduct.price - +dataNewProduct.priceOrigin) *
              +text
            ).toString()
          : name === "price"
          ? (
              (+text - +dataNewProduct.priceOrigin) *
              +dataNewProduct.number
            ).toString()
          : name === "priceOrigin"
          ? (
              (+dataNewProduct.price - +text) *
              +dataNewProduct.number
            ).toString()
          : 0,
    });
  };
  const onSave = () => {
    if (data.name.length > 3 && data.products && data.totalPrice) {
      setNewCustomer({ ...data, date: new Date().toString() })(dispatch);
      if (!users?.find((i) => i.name === data.name)) {
        // перевірка чи вже є користувач, якщо ні, то зберігаємо нового в users
        setNewUser({
          ...emptyUser,
          name: data.name,
          adress: data.adress,
        })(dispatch);
      }
      setData(emptyData);
      navigation.navigate("Orders");
    }
  };

  const deleteProduct = (nameProduct, price, profit, number) => {
    const newArr = data?.products?.filter((i) => i.nameProduct !== nameProduct);
    setData({
      ...data,
      products: newArr,
      totalPrice: +data.totalPrice - +price * +number,
      profit: +data.profit - +dataNewProduct.profit * +number,
    });
  };

  return (
    <ScrollView>
      <Wrapper>
        <WrapperTop>
          <Price data={data} setData={setData} />
          <Shipping data={data} setData={setData} />
          <Delivery data={data} setData={setData} />
        </WrapperTop>

        <WrapperRowNameOrder>
          <NameInput
            isProducts={false}
            placeholder="Ім'я клієнта"
            field="name"
            userNames={users}
            setData={setData}
            data={data}
            position={{ top: 51 }}
            elevation={5}
          />
        </WrapperRowNameOrder>

        <WrapperRowNameOrder>
          <NameInput
            isProducts={true}
            placeholder="Товар"
            field="nameProduct"
            userNames={products}
            setData={setDataNewProduct}
            data={dataNewProduct}
            position={{ top: 51 }}
            elevation={5}
          />
        </WrapperRowNameOrder>

        <WrapperRow>
          <View>
            <RegularText textAlign="center">Кількість</RegularText>
            <StyledInput
              flex={1}
              maxLength={3}
              keyboardType="numeric"
              value={dataNewProduct.number.toString()}
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "number")
              }
            />
          </View>

          <View>
            <RegularText textAlign="center">Ціна</RegularText>
            <StyledInput
              maxLength={4}
              flex={1}
              keyboardType="numeric"
              value={dataNewProduct.price.toString()}
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "price")
              }
            />
          </View>

          <View>
            <RegularText textAlign="center">Ціна закупки</RegularText>
            <StyledInput
              maxLength={4}
              flex={1}
              keyboardType="numeric"
              value={dataNewProduct.priceOrigin.toString()}
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "priceOrigin")
              }
            />
          </View>
        </WrapperRow>

        <TouchableNFWrapper
          onPress={addToCard}
          backgroundColor="mediumseagreen"
          marginTop={7}
          elevation={4}
        >
          <Text>Додати до корзини</Text>
        </TouchableNFWrapper>
        <>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ paddingVertical: 5, marginLeft: 10, width: 30 }}>
              шт
            </Text>
            <Text style={{ paddingVertical: 5, marginLeft: 10, width: 100 }}>
              Імя
            </Text>
            <Text style={{ paddingVertical: 5, marginLeft: 10, width: 50 }}>
              Ціна
            </Text>
            <Text style={{ paddingVertical: 5, marginLeft: 10, width: 50 }}>
              Закуп
            </Text>
            <Text style={{ paddingVertical: 5, marginLeft: 10, width: 90 }}>
              Прибуток
            </Text>
          </View>
          <FlatList
            style={{ flexGrow: 1, height: 140, width: "100%" }}
            data={data?.products}
            keyExtractor={() => Math.random().toString()}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ paddingVertical: 5, marginLeft: 10, width: 30 }}>
                  {item?.number}
                </Text>
                <Text
                  style={{ paddingVertical: 5, marginLeft: 10, width: 115 }}
                >
                  {item?.nameProduct}
                </Text>
                <Text style={{ paddingVertical: 5, marginLeft: 10, width: 50 }}>
                  {item?.price?.toString()}
                </Text>
                <Text style={{ paddingVertical: 5, marginLeft: 10, width: 50 }}>
                  {item?.priceOrigin?.toString()}
                </Text>
                <Text style={{ paddingVertical: 5, marginLeft: 10, width: 40 }}>
                  {item?.profit?.toString()}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    deleteProduct(
                      item?.nameProduct,
                      item?.price,
                      item?.profit,
                      item?.number
                    )
                  }
                  style={{
                    paddingVertical: 5,
                    width: 30,
                    alignItems: "center",
                  }}
                >
                  <Text>X</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </>

        <WrapperNotes>
          <Notes
            placeholder="Адрес"
            multiline={true}
            numberOfLines={3}
            onChangeText={(text: string) => changeText(text, "adress")}
            value={data?.adress}
          />
        </WrapperNotes>

        <WrapperNotes>
          <Notes
            placeholder="Коментар"
            multiline={true}
            numberOfLines={3}
            onChangeText={(text: string) => changeText(text, "comment")}
            value={data?.comment}
          />
        </WrapperNotes>
      </Wrapper>
    </ScrollView>
  );
};

NewOrdersScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="save"
          iconName="save"
          onPress={() => navigation.getParam("saveOrder")()}
        ></Item>
      </HeaderButtons>
    ),
  };
};
