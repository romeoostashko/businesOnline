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
const StackNavigatorConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e",
      height: 75,
    },

    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
};

export const ScreensStackNavigator = createStackNavigator(
  RouteConfigs,
  StackNavigatorConfig
);
