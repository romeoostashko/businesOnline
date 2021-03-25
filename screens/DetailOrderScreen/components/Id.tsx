import React from "react";
import {} from "react-native";
import { TouchableNFParam } from "../constants";
import { TouchableNFWrapper } from "../../../components/TouchableNFWrapper/TouchableNFWrapper";
import { Icon, RegularText } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Id = ({ id }) => {
  return (
    <TouchableNFWrapper
      height={TouchableNFParam.heightTNFW}
      borderRadius={TouchableNFParam.borderRadiusTNFW}
      width={TouchableNFParam.widthTNFW}
      elevation={TouchableNFParam.elevationTNFW}
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
  );
};
