import { createStackNavigator } from "react-navigation-stack";
import { CustomerScreen, PurchasesScreen } from "../screens";

const RouteConfigs = {
  Purchases: {
    screen: PurchasesScreen,
    navigationOptions: { title: "Продажі" },
  },
  Customer: { screen: CustomerScreen },
};
const StackNavigatorConfig = {};

export const ScreensStackNavigator = createStackNavigator(RouteConfigs);
