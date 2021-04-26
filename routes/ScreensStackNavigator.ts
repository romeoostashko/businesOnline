import { createStackNavigator } from "react-navigation-stack";
import { DetailOrderScreen, OrdersScreen } from "../screens";
import { StackNavigatorConfig } from "./constatnts";

const RouteConfigs = {
  Orders: {
    screen: OrdersScreen,
    navigationOptions: { title: "Всі замовлення" },
  },
  DetailOrder: {
    screen: DetailOrderScreen,
    navigationOptions: { title: "Замовлення" },
  },
};

export const ScreensStackNavigator = createStackNavigator(
  RouteConfigs,
  StackNavigatorConfig
);
