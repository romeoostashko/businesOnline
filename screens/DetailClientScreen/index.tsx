import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../../components/HeaderButton";
import {
  setNewProduct,
  getProducts,
  updateProduct,
} from "../../store/session/actions";
import { User } from "./types";
import { emptyUser } from "./constants";
import { RegularText } from "../../components/RegularText/RegularText";
import { NameInput } from "../DetailOrderScreen/components/NameInput";
import { TouchableNFWrapper } from "../../components/TouchableNFWrapper/TouchableNFWrapper";
import {
  StyledInput,
  Wrapper,
  WrapperRow,
  WrapperTop,
  Notes,
  WrapperNotes,
  WrapperRowNameOrder,
} from "./styles";

export const DetailClientScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const id = navigation?.getParam("id");
  const setLoad = navigation?.getParam("setLoad");
  const { users } = useSelector((state) => state.session);
  let thisProduct = {};

  if (id !== "NEW_USER") {
    thisUser = users?.find((i) => i.id === id);
  }

  //const [data, setData] = useState<Order>({ ...(thisProduct[1] || {}) });
  const [dataNewUser, setDataNewUser] = useState<User>({
    ...(thisUser || emptyUser),
  });

  const onSave = () => {
    if (
      dataNewProduct?.name?.toString().length > 0 &&
      dataNewProduct?.price?.toString().length > 0 &&
      dataNewProduct?.priceOrigin?.toString().length > 0
    ) {
      console.log("save");
      if (id !== "NEW_PRODUCT") {
        updateProduct(dataNewProduct, id)(dispatch);
        navigation.goBack();
      } else {
        setNewProduct(dataNewProduct)(dispatch);
        getProducts((x) => setLoad(x))(dispatch);
        navigation.goBack();
      }
    } else {
      console.log("dont  saved");
    }
  };

  useEffect(() => {
    navigation.setParams({ saveNewProduct: onSave });
  }, [dataNewProduct, dataNewProduct?.name?.length]);

  const changeText = (text: string, name: string) => {
    setDataNewProduct({ ...dataNewProduct, [name]: text });
  };

  const changeTextNewProduct = (text: string, name: string) => {
    setDataNewProduct({
      ...dataNewProduct,
      [name]: text,
      profit:
        name === "number"
          ? (+dataNewProduct?.price - +dataNewProduct?.priceOrigin).toString()
          : name === "price"
          ? (+text - +dataNewProduct?.priceOrigin).toString()
          : name === "priceOrigin"
          ? (+dataNewProduct?.price - +text).toString()
          : 0,
    });
  };

  return (
    <ScrollView>
      <Wrapper>
        <WrapperRowNameOrder>
          <NameInput
            isProducts={true}
            placeholder="Товар"
            field="name"
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
              value={dataNewProduct?.number?.toString()}
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
              value={dataNewProduct?.price?.toString()}
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
              value={dataNewProduct?.priceOrigin?.toString()}
              onChangeText={(text: string) =>
                changeTextNewProduct(text, "priceOrigin")
              }
            />
          </View>
        </WrapperRow>

        <WrapperNotes>
          <Notes
            placeholder="Опис товару"
            multiline={true}
            numberOfLines={3}
            onChangeText={(text: string) => changeText(text, "comment")}
            value={dataNewProduct?.comment?.toString()}
          />
        </WrapperNotes>
      </Wrapper>
    </ScrollView>
  );
};

DetailClientScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="save"
          iconName="save"
          onPress={() => navigation.getParam("saveNewProduct")()}
        ></Item>
      </HeaderButtons>
    ),
  };
};
