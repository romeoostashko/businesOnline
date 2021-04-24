import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { theme } from "../../../theme";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, RegularText, WrapperRowNameUser, StyledInput } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import { ModalCard } from "../../../components";
import { products } from "../../../data/dammy";

export const NameInput = ({
  width = "100%",
  position = { top: 162, left: 0, right: 0, bottom: 0 },
  data,
  setData,
  userNames,
  field,
  placeholder = "",
  borderRadius = 12,
  backgroundColor = "#eee",
  elevation = 0,
  zIndex = 99999,
  isProducts = false,
}: {
  width?: string;
  position?: { top: number; left: number; right: number; bottom: number };
  data: object;
  setData: (arg: {}) => void;
  userNames: [];
  field: string;
  placeholder?: string;
  borderRadius?: number;
  backgroundColor?: string;
  elevation: number;
  zIndex;
  isProducts?: boolean;
}) => {
  const [findNames, setFindNames] = useState([]);
  const [hidePanel, setHidePanel] = useState<boolean>(true);
  const EXTRAСHARGE = 30; // мінімальна націнка

  const getArrayProducts = () => {
    const arr: object[] = [];
    userNames.forEach((i: any) => {
      arr.push(i.name);
    });
    return arr;
  };

  const changeText = (text: string, name: string) => {
    setData({ ...data, [name]: text });
    if (text.length > 1) {
      setHidePanel(false);
      setFindNames(
        getArrayProducts().filter((name: string) => {
          const arr = name.split(" ");
          return arr.some((i) =>
            i.toLocaleLowerCase().startsWith(text.toLocaleLowerCase())
          );
        })
      );
    } else {
      setFindNames([]);
    }
  };

  const quickEntryHandler = (name: string) => {
    setData({
      ...data,
      [field]: name,
    });
    isProducts &&
      setData({
        ...data,
        [field]: name,
        priceOrigin: isProducts
          ? userNames?.find((j: object) => j.name === name).priceOrigin
          : null,
        price: isProducts
          ? +userNames?.find((j: object) => j.name === name).priceOrigin +
            EXTRAСHARGE
          : null,
        number: isProducts ? "1" : null,
        profit: isProducts ? EXTRAСHARGE : null,
      });

    setHidePanel(true);
  };

  return (
    <>
      <WrapperRowNameUser>
        <StyledInput
          placeholder={placeholder}
          value={data[field]}
          onChangeText={(text: string) => changeText(text, field)}
        />
        <TouchableNFWrapper
          width={50}
          onPress={() => {
            setData({ ...data, [field]: "" });
            setFindNames([]);
            setHidePanel(true);
          }}
        >
          <View>
            <RegularText>x</RegularText>
          </View>
        </TouchableNFWrapper>
      </WrapperRowNameUser>

      <View
        style={{
          elevation: elevation,
          position: "absolute",
          top: position.top,
          left: position.left,
          width: width,
          zIndex: zIndex,

          backgroundColor: "#eee",
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
      >
        {!hidePanel && (
          <View style={{ maxHeight: 200 }}>
            <ScrollView>
              {findNames.map((name, i) => (
                <TouchableNFWrapper
                  backgroundColor={backgroundColor}
                  onPress={() => quickEntryHandler(name)}
                >
                  <RegularText>{name}</RegularText>
                </TouchableNFWrapper>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </>
  );
};
