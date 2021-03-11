import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { PurchasesScreen } from "../screens";
import { ScreensStackNavigator } from "./ScreensStackNavigator";

const RouteConfigs = {
  screen: ScreensStackNavigator,
  Purchases: PurchasesScreen,
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
