import SetPlayerOrder from "./components/SetPlayerOrder";
import Scoreboard from "./components/Scoreboard";
import GameOver from "./components/GameOver";
import WelcomeScreen from "./components/WelcomeScreen";
import AddPlayers from "./components/AddPlayers";
import {StackNavigator} from "react-navigation";

const SimpleApp = StackNavigator({
    WelcomeScreen: {screen: WelcomeScreen},
    AddPlayers: {screen: AddPlayers},
    SetPlayerOrder: {screen: SetPlayerOrder},
    Scoreboard: {screen: Scoreboard},
    GameOver: {screen: GameOver}
});

export default SimpleApp;