import React, { useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { theme } from "../../../theme";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, RegularText, WrapperRowNameUser, StyledInput } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import { ModalCard } from "../../../components";

export const NameInput = ({
  data,
  setModalVisible,
  modalVisible,
  setData,
}: {
  data: object;
  setModalVisible;
  modalVisible: boolean;
  setData;
}) => {
  const { orders, userNames } = useSelector((state) => state.session);
  const [findNames, setFindNames] = useState([]);
  const changeText = (text: string, name: string) => {
    setData({ ...data, [name]: text });
    if (text.length) {
      setFindNames(
        userNames.filter((userName: string) => {
          const arr = userName.split(" ");
          return arr.some((i) =>
            i.toLocaleLowerCase().startsWith(text.toLocaleLowerCase())
          );
        })
      );
    } else {
      setFindNames([]);
    }
  };

  return (
    <ModalCard modalVisible={modalVisible}>
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
      <View
        style={{
          backgroundColor: "#eee",
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        {findNames.map((name) => (
          <TouchableNFWrapper
            backgroundColor="#eee"
            onPress={() => setData({ ...data, name: name })}
          >
            <RegularText>{name}</RegularText>
          </TouchableNFWrapper>
        ))}
      </View>
    </ModalCard>
  );
};
