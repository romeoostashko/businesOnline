import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import {
  StyledInput,
  Row,
  Wrapper,
  RegularText,
  PriceText,
  WrapperRow,
  WrapperTop,
  CeilTop,
  InputPrice,
  Icon,
  Notes,
  WrapperNotes,
} from "./styles";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const DetailOrderScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.session.customers);

  return (
    <Wrapper>
      <WrapperTop>
        <CeilTop>
          <Icon>
            <MaterialCommunityIcons
              name="music-accidental-sharp"
              size={28}
              color="black"
            />
          </Icon>
          <RegularText>id</RegularText>
        </CeilTop>
        <CeilTop>
          <Icon>
            <Entypo name="price-tag" size={24} color="black" />
          </Icon>
          <InputPrice placeholder="ціна" value="1525" />
        </CeilTop>
        <CeilTop>
          <Icon>
            <MaterialIcons name="local-shipping" size={28} color="#ccc" />
          </Icon>
          <RegularText>так</RegularText>
        </CeilTop>
        <CeilTop>
          <Icon>
            <AntDesign name="gift" size={28} color="#ccc" />
          </Icon>
          <RegularText>так</RegularText>
        </CeilTop>
      </WrapperTop>

      <WrapperRow>
        <StyledInput placeholder="d" value="Roman Ostash  Ostash" />
      </WrapperRow>
      <WrapperNotes>
        <Notes
          multiline={true}
          numberOfLines={4}
          onChangeText={() => {}}
          value="dfdf"
        />
      </WrapperNotes>
    </Wrapper>
  );
};
