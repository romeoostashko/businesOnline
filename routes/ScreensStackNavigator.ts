import { createStackNavigator } from "react-navigation-stack";
import { DetailOrderScreen, OrdersScreen } from "../screens";

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
const StackNavigatorConfig = {};

export const ScreensStackNavigator = createStackNavigator(RouteConfigs);
