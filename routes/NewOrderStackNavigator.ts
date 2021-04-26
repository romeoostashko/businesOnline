import { createStackNavigator } from "react-navigation-stack";
import { NewOrdersScreen } from "../screens";
import { StackNavigatorConfig } from "./constatnts";

const RouteConfigs = {
  NewOrders: {
    screen: NewOrdersScreen,
    navigationOptions: {
      title: "Додати замовлення",
    },
  },
};

export const NewOrderStackNavigator = createStackNavigator(
  RouteConfigs,
  StackNavigatorConfig
);
