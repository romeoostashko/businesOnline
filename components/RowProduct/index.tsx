import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/session/actions";
import { theme } from "../../theme";
import { RegularText } from "../../components/RegularText/RegularText";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { CentrendWrapperRow, CentrendWrapper } from "./styles";

export const RowProduct = ({
  navigation,
  name,
  id,
  numbers,
  totalPrice,
  profit,
  height = 60,
}: {
  navigation: object;
  name: string;
  id: string;
  numbers: string;
  profit: string;
  totalPrice: string;
}) => {
  const dispatch = useDispatch();
  const delOrder = () => {
    deleteProduct(id)(dispatch);
  };

  const alert = () => {
    Alert.alert("Увага!", "Видалити замовлення? ", [
      { text: "Cancel", onPress: () => console.log("cancel") },
      { text: "Ok", onPress: delOrder },
    ]);
  };
  return (
    <View style={{ ...styles.container, height: height }}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#AAF", true)}
        style={{ flex: 1 }}
        onPress={() => {
          navigation.navigate("DetailProduct", {
            id: id,
          });
        }} //TODO:
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          <CentrendWrapperRow style={styles.centrend}>
            <CentrendWrapper flex={0.2}>
              <RegularText
                fontSize={16}
                color={
                  +numbers > 0 ? theme.palette.green : theme.palette.salmon
                }
              >
                {numbers}
              </RegularText>
            </CentrendWrapper>

            <CentrendWrapper flex={0.9}>
              <RegularText
                fontSize={14}
                color={
                  +numbers > 0 ? theme.palette.green : theme.palette.salmon
                }
              >
                {name}
              </RegularText>
            </CentrendWrapper>

            <CentrendWrapper flex={0.3}>
              <RegularText
                fontSize={14}
                color={
                  +numbers > 0 ? theme.palette.green : theme.palette.salmon
                }
              >
                ₴ {profit}
              </RegularText>
            </CentrendWrapper>

            <CentrendWrapper flex={0.3}>
              <RegularText
                fontSize={14}
                fontWeight={"bold"}
                color={
                  +numbers > 0 ? theme.palette.green : theme.palette.salmon
                }
              >
                ₴ {totalPrice}
              </RegularText>
            </CentrendWrapper>

            <TouchableOpacity
              onPress={alert}
              style={{
                //backgroundColor: "#222",
                paddingHorizontal: 6,
                paddingVertical: 18,
                flex: 0.2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RegularText>
                <AntDesign
                  name="delete"
                  size={15}
                  color={theme.palette.salmon}
                />
              </RegularText>
            </TouchableOpacity>
          </CentrendWrapperRow>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 60,
    backgroundColor: "#fff",
    elevation: 0,
    marginTop: 7,
    marginHorizontal: 7,
  },
});
