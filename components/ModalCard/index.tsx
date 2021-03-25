import React from "react";
import { Modal, View } from "react-native";
import { theme } from "../../theme";

export const ModalCard = ({
  children,
  modalVisible = false,
  elevation = 0,
  backgroundColor = "#eee",
  borderRadius = 15,
  width = "92%",
  top = 205,
  left = "4%",
  animationType = "none",
  transparent = true,
}) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Modal
        animationType={animationType}
        statusBarTranslucent={true}
        transparent={transparent}
        visible={modalVisible}
      >
        <View
          style={{
            flex: 1,
            top: top,
            left: left,
          }}
        >
          <View
            style={{
              backgroundColor: backgroundColor,
              borderRadius: borderRadius,
              elevation: elevation,
              width: width,
            }}
          >
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};
