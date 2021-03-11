import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { CentrendWrapper, RegularText } from "../../components";

export const PurchasesScreen = (props) => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.session.customers);

  return (
    <CentrendWrapper>
      <RegularText>Ghbds</RegularText>
    </CentrendWrapper>
  );
};

const styles = StyleSheet.create({});
