import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Deck from "./src/components/Deck";
import SetPlayerOrder from "./src/components/SetPlayerOrder";
import Scoreboard from "./src/components/Scoreboard";
import GameOver from "./src/components/GameOver";
import reducers from './src/reducers';
import WelcomeScreen from "./src/components/WelcomeScreen";
import AddPlayers from "./src/components/AddPlayers";
import {StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import SimpleApp from "./src/routing";

export default class App extends React.Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <SimpleApp style={styles.container}/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
