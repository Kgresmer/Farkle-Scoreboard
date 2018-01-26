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

const DATA = [
    {id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'},
    {id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'},
    {id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'},
    {id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'},
    {id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'},
    {id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'},
    {id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'},
    {id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'},
];


export default class App extends React.Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <SimpleApp/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
