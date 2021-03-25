import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  ScrollView,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { theme } from "../../theme";
import { Id } from "./components/Id";
import { Price } from "./components/Price";
import { Shipping } from "./components/Shipping";
import { Delivery } from "./components/Delivery";
import { NameInput } from "./components/NameInput";

import {
  StyledInput,
  Wrapper,
  RegularText,
  WrapperRow,
  WrapperTop,
  Notes,
  WrapperNotes,
  WrapperRowName,
  ViewOrders,
  WrapperRowNameOrder,
  WrapperRowNameUser,
} from "./styles";
import { TouchableNFWrapper } from "../../components/TouchableNFWrapper/TouchableNFWrapper";
import { ModalCard } from "../../components";

export const DetailOrderScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const id = navigation?.getParam("id");

  const { orders } = useSelector((state) => state.session);
  const thisOrder = orders?.find((i: object) => i.id === id);

  //const [isEditPrice, setEditPrice] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({ ...thisOrder });

  const setSheep = () => {};

  const changeText = (text: string, name: string) => {
    setData({ ...data, [name]: text });
  };
  console.log("data", data);

  return (
    <ScrollView>
      <Wrapper>
        <WrapperTop>
          <Id id={id} />
          <Price price={thisOrder.totalPrice} isPaid={thisOrder.isPaid} />
          <Shipping isSheep={thisOrder.isSheep} />
          <Delivery isGiven={thisOrder.isGiven} />
        </WrapperTop>
        <TouchableNFWrapper
          elevation={10}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <RegularText> {data.name}</RegularText>
        </TouchableNFWrapper>
        <NameInput
          setData={setData}
          data={data}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        {/*<ModalCard modalVisible={modalVisible}>
            <WrapperRowNameUser>
              <StyledInput
                placeholder="Ім'я клієнта"
                value={data.name}
                onChangeText={(text: string) => changeText(text, "name")}
              />
              <TouchableNFWrapper
                width={50}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <View>
                  <RegularText>x</RegularText>
                </View>
              </TouchableNFWrapper>
            </WrapperRowNameUser>
            <View>
              <TouchableNFWrapper>
                <RegularText>xdsfsdf</RegularText>
              </TouchableNFWrapper>
              <RegularText>xdsfsdf</RegularText>
            </View>
          </ModalCard> */}

        <WrapperRowNameOrder>
          <StyledInput placeholder="Товар" value="" />
        </WrapperRowNameOrder>
        <WrapperRow>
          <StyledInput placeholder="Кількість" value="" />
          <StyledInput placeholder="Ціна" value="" />
          <StyledInput placeholder="Ціна закупки" value="" />
        </WrapperRow>
        <TouchableNFWrapper
          backgroundColor="mediumseagreen"
          marginTop={7}
          elevation={20}
        >
          <Text>Додати до корзини</Text>
        </TouchableNFWrapper>
        <ViewOrders>
          {thisOrder?.shopItems?.map((i) => (
            <Text>{i.name}</Text>
          ))}
        </ViewOrders>

        {/* Кнопка зберегти */}
        <TouchableNFWrapper
          backgroundColor="salmon"
          marginTop={20}
          elevation={20}
        >
          <Text>Зберегти</Text>
        </TouchableNFWrapper>

        <WrapperNotes>
          <Notes
            placeholder="Адрес"
            multiline={true}
            numberOfLines={3}
            onChangeText={() => {}}
            value=""
          />
        </WrapperNotes>

        <WrapperNotes>
          <Notes
            placeholder="Коментар"
            multiline={true}
            numberOfLines={3}
            onChangeText={() => {}}
            value=""
          />
        </WrapperNotes>
      </Wrapper>
    </ScrollView>
  );
};
