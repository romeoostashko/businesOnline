import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { CentrendWrapperRow, RegularText, CentrendWrapper } from "./styles";

export const RowOrder = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#AAF", true)}
        style={{ flex: 1 }}
        onPress={() => {
          navigation.navigate("DetailOrder");
        }}
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
              <RegularText>#1520</RegularText>
            </CentrendWrapper>
            <CentrendWrapper flex={1.2}>
              <RegularText>Осташ Роман Романович Осташ Осташ Осташ</RegularText>
            </CentrendWrapper>

            <CentrendWrapper flex={0.3}>
              <RegularText>
                <AntDesign name="gift" size={24} color="#ccc" />
              </RegularText>
            </CentrendWrapper>
            <CentrendWrapper flex={0.3}>
              <RegularText>
                <MaterialIcons name="local-shipping" size={28} color="#ccc" />
              </RegularText>
            </CentrendWrapper>
            <CentrendWrapper flex={0.5}>
              <RegularText>₴15235</RegularText>
            </CentrendWrapper>
          </CentrendWrapperRow>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: 70,
    width: "100%",
    backgroundColor: "#fff",
    elevation: 15,
    marginBottom: 7,
  },
});
