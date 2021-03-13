import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { NewOrdersScreen } from "../screens";
import { ScreensStackNavigator } from "./ScreensStackNavigator";
import { NewOrderStackNavigator } from "./NewOrderStackNavigator";

const RouteConfigs = {
  Orders: ScreensStackNavigator,
  NewOrders: NewOrderStackNavigator,
};

const TabNavigatorConfig = {
  tabBarOptions: { tabStyle: { height: 60 } },
  tabBarPosition: "bottom",
};

const TopTabNanigator = createMaterialTopTabNavigator(
  RouteConfigs,
  TabNavigatorConfig
);

export default createAppContainer(TopTabNanigator);
