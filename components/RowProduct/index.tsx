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
import { deleteOrder } from "../../store/session/actions";
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
  isSheep,
  isGiven,
  isPaid,
  profit,
}) => {
  const dispatch = useDispatch();

  const delOrder = () => {
    deleteOrder(id)(dispatch);
  };

  const alert = () => {
    Alert.alert("Увага!", "Видалити замовлення? ", [
      { text: "Cancel", onPress: () => console.log("cancel") },
      { text: "Ok", onPress: delOrder },
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#AAF", true)}
        style={{ flex: 1 }}
        onPress={() => {
          navigation.navigate("DetailOrder", {
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
            <CentrendWrapper flex={0.4}>
              <RegularText
                color={
                  isPaid && isGiven
                    ? theme.palette.green
                    : theme.palette.textColor
                }
              >
                {numbers}
              </RegularText>
            </CentrendWrapper>

            <CentrendWrapper flex={0.8}>
              <RegularText
                color={
                  isPaid && isGiven
                    ? theme.palette.green
                    : theme.palette.textColor
                }
              >
                {name}
              </RegularText>
            </CentrendWrapper>

            <CentrendWrapper flex={0.4}>
              <RegularText
                color={
                  isPaid && isGiven
                    ? theme.palette.green
                    : theme.palette.textColor
                }
              >
                ₴ {profit}
              </RegularText>
            </CentrendWrapper>

            <CentrendWrapper flex={0.3}>
              <RegularText
                fontWeight={isPaid ? 100 : "bold"}
                color={isPaid ? theme.palette.green : theme.palette.salmon}
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
