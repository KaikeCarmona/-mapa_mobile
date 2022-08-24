import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../src/HomeScreen";
import MapScreen from "../src/MapScreen";

const Rotas = {
    HomeScreen:{
        name: "HomeScreen",
        screen: HomeScreen,
    },
    MapScreen: {
        name: "MapScreen",
        screen: MapScreen,
    },
};

const Navegacao = createSwitchNavigator(Rotas);
export default createAppContainer(Navegacao);