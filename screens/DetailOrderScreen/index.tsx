import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { theme } from "../../theme";
import {
  StyledInput,
  Wrapper,
  RegularText,
  WrapperRow,
  WrapperTop,
  InputPrice,
  OutputPrice,
  Icon,
  Notes,
  WrapperNotes,
  WrapperRowName,
  ViewOrders,
  WrapperRowNameOrder,
} from "./styles";
import { TouchableNFWrapper } from "../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const DetailOrderScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const id = navigation?.getParam("id");

  const orders = useSelector((state) => state.session.orders);
  const thisOrder = orders?.find((i: object) => i.id === id);

  const [isEditPrice, setEditPrice] = useState(false);
  const [data, setData] = useState({ ...thisOrder });
  const heightTNFW = 100;
  const widthTNFW = "23.5%";
  const borderRadiusTNFW = 7;
  const elevationTNFW = 20;

  const setSheep = () => {};

  const changeText = (text: string, name: string) => {
    setData({ ...data, [name]: text });
  };
  console.log(data);

  return (
    <ScrollView>
      <Wrapper>
        <WrapperTop>
          <TouchableNFWrapper
            height={heightTNFW}
            borderRadius={borderRadiusTNFW}
            width={widthTNFW}
            elevation={elevationTNFW}
          >
            <Icon>
              <MaterialCommunityIcons
                name="music-accidental-sharp"
                size={28}
                color="black"
              />
            </Icon>
            <RegularText>{id}</RegularText>
          </TouchableNFWrapper>

          {/* ціна*/}
          <TouchableNFWrapper
            height={heightTNFW}
            borderRadius={borderRadiusTNFW}
            width={widthTNFW}
            elevation={elevationTNFW}
            onPress={() => {
              setEditPrice(!isEditPrice);
            }}
          >
            <Icon>
              <Entypo
                name="price-tag"
                size={24}
                color={
                  thisOrder.isPaid ? theme.palette.green : theme.palette.salmon
                }
              />
            </Icon>
            {isEditPrice ? (
              <InputPrice placeholder="ціна" value="1525" />
            ) : (
              <OutputPrice>1525</OutputPrice>
            )}
          </TouchableNFWrapper>

          {/* Доставлено мені*/}
          <TouchableNFWrapper
            height={heightTNFW}
            borderRadius={borderRadiusTNFW}
            width={widthTNFW}
            elevation={elevationTNFW}
            onPress={() => {}}
          >
            <Icon>
              <MaterialIcons
                name="local-shipping"
                size={28}
                color={
                  thisOrder.isSheep ? theme.palette.green : theme.palette.salmon
                }
              />
            </Icon>
            <RegularText>{thisOrder.isSheep ? "так" : "ні"}</RegularText>
          </TouchableNFWrapper>

          {/* Доставлено клієнту*/}
          <TouchableNFWrapper
            height={heightTNFW}
            borderRadius={borderRadiusTNFW}
            width={"23%"}
            elevation={elevationTNFW}
          >
            <Icon>
              <AntDesign
                name="gift"
                size={28}
                color={
                  thisOrder.isGiven ? theme.palette.green : theme.palette.salmon
                }
              />
            </Icon>
            <RegularText>{thisOrder.isGiven ? "так" : "ні"}</RegularText>
          </TouchableNFWrapper>
        </WrapperTop>

        <WrapperRowName>
          <StyledInput
            flex={1}
            placeholder="Ім'я клієнта"
            value={data.name}
            onChangeText={(text: string) => changeText(text, "name")}
          />
        </WrapperRowName>
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
