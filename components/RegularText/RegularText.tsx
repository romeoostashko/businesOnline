import React from "react";
import {} from "react-native";
import { StyledText } from "./style";

export const RegularText = ({
  color = "#3b3b3b",
  children,
  fontWeight = 100,
}) => {
  return (
    <StyledText fontWeight={fontWeight} color={color}>
      {children}
    </StyledText>
  );
};
