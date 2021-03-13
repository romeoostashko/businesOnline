import { createStackNavigator } from "react-navigation-stack";
import { NewOrdersScreen } from "../screens";

const RouteConfigs = {
  NewOrders: {
    screen: NewOrdersScreen,
    navigationOptions: { title: "Додати замовлення" },
  },
};
const StackNavigatorConfig = {};

export const NewOrderStackNavigator = createStackNavigator(RouteConfigs);
