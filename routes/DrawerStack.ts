import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { AllProductsScreen, StatisticScreen } from "../screens";
import { TopTabNanigator } from "./TopTabsNavigators";
import { StackNavigatorConfig } from "./constatnts";

const AllProductsDrawerNav = createStackNavigator(
  {
    AllProd: AllProductsScreen,
  },
  StackNavigatorConfig
);
const StatisticDrawerNav = createStackNavigator(
  {
    Statistic: StatisticScreen,
  },
  StackNavigatorConfig
);

const RouteConfigs = {
  Замовлення: TopTabNanigator,
  "Всі товари": AllProductsDrawerNav,
  Статистика: StatisticDrawerNav,
};

const DrawerNavigator = createDrawerNavigator(RouteConfigs, {
  navigationOptions: {},
  contentOptions: {},
});

export default createAppContainer(DrawerNavigator);
