import React, {
  useCallback,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
  Ref,
} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

export const CustomBottomSheet = forwardRef(
  ({ children }, ref: Ref<RefObject>) => {
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ["25%", "95%"], []);

    // callbacks
    /*const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);*/

    useImperativeHandle(
      ref,
      () => ({
        open: () => bottomSheetModalRef.current?.present(),
      }),
      []
    );

    const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index);
    }, []);

    // renders
    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          style={{ elevation: 20 }}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          animationDuration={800}

          //backdropComponent={BottomSheetBackdrop}
        >
          <View style={styles.contentContainer}>{children}</View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

type RefObject = {
  open: () => void;
};
