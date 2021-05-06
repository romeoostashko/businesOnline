import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { NewOrdersScreen } from "../screens";
import { ScreensStackNavigator } from "./ScreensStackNavigator";
import { NewOrderStackNavigator } from "./NewOrderStackNavigator";

const RouteConfigs = {
  "Всі замовлення": ScreensStackNavigator,
  "Нове замовлення": NewOrderStackNavigator,
};

const TabNavigatorConfig = {
  tabBarOptions: { tabStyle: { height: 60 } },
  tabBarPosition: "bottom",
};

export const TopTabNanigator = createMaterialTopTabNavigator(
  RouteConfigs,
  TabNavigatorConfig
);
