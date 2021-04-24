import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { setNewCustomer } from "../../store/session/actions";
import { Order, NewOrder } from "./types";
import { emptyData, emptyNewOrder } from "./constants";
import { RegularText } from "../../components/RegularText/RegularText";
import { theme } from "../../theme";
import { Id } from "../DetailOrderScreen/components/Id";
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
  const { orders, userNames, products } = useSelector((state) => state.session);
  //const [isEditPrice, setEditPrice] = useState(false);
  const [data, setData] = useState<Order>(emptyData);
  const [dataNewProduct, setDataNewProduct] = useState<NewOrder>(emptyNewOrder);

  const setSheep = () => {};

  const changeText = (text: string, name: string) => {
    setData({ ...data, [name]: text });
  };

  const addToCard = () => {
    const arr = Object.entries(dataNewProduct).filter((i) =>
      i[0] === "profit" ? false : true
    );
    console.log("Додаю до корзини..."); /*DEV*/
    if (arr.findIndex((i) => !i[1]) >= 0) {
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
      setNewCustomer({ ...data, date: new Date().toString })(dispatch);
      setData(emptyData);
      navigation.navigate("Orders");
    }
  };

  return (
    <ScrollView>
      <Wrapper>
        <WrapperTop>
          {/*<Id id={id} />*/}
          <Price data={data} setData={setData} />
          <Shipping data={data} setData={setData} />
          <Delivery data={data} setData={setData} />
        </WrapperTop>

        {/* Кнопка зберегти */}
        <TouchableNFWrapper
          backgroundColor="salmon"
          marginTop={20}
          elevation={4}
          onPress={onSave}
        >
          <Text>Зберегти</Text>
        </TouchableNFWrapper>

        <WrapperRowNameOrder>
          <NameInput
            isProducts={false}
            placeholder="Ім'я клієнта"
            field="name"
            userNames={userNames}
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
              //style={{ backgroundColor: "#ccc" }}
              flex={1}
              maxLength={3}
              keyboardType="numeric"
              //placeholder="Кількість"
              value={dataNewProduct.number.toString()}
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "number")
              }
            />
          </View>

          <View>
            <RegularText textAlign="center">Ціна</RegularText>
            <StyledInput
              //style={{ backgroundColor: "#ccc" }}
              maxLength={4}
              flex={1}
              keyboardType="numeric"
              //placeholder="Ціна"
              value={dataNewProduct.price.toString()}
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "price")
              }
            />
          </View>

          <View>
            <RegularText textAlign="center">Ціна закупки</RegularText>
            <StyledInput
              //style={{ backgroundColor: "#ccc" }}
              maxLength={4}
              flex={1}
              keyboardType="numeric"
              //placeholder="Ціна закупки"
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

        <FlatList
          style={{ flexGrow: 1, height: 100, width: "100%" }}
          data={data?.products}
          keyExtractor={() => Math.random().toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.number} шт
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.nameProduct}
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.price?.toString()} грн
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.priceOrigin?.toString()} грн
              </Text>
              <Text style={{ paddingVertical: 5, marginLeft: 10 }}>
                {item?.profit?.toString()} грн
              </Text>
            </View>
          )}
        />

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
