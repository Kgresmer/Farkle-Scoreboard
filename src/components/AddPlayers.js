import React, {Component} from 'react';
import {Button} from "../components/common/index";
import {StyleSheet, View, ListView} from "react-native";
import PlayerListItem from "./PlayerListItem";

const DATA = [
    {id: 1, name: 'Kevin', wins: 2, losses: 1, bestScore: 10500, worstScore: 5400},
    {id: 2, name: 'Sigrid', wins: 3, losses: 0, bestScore: 10600, worstScore: 4400},
    {id: 3, name: 'Bruce', wins: 1, losses: 5, bestScore: 10400, worstScore: 5300},
    {id: 4, name: 'Marilyn', wins: 4, losses: 2, bestScore: 10200, worstScore: 3400},
    {id: 5, name: 'Mark', wins: 3, losses: 1, bestScore: 11500, worstScore: 7400},
    {id: 6, name: 'Luke', wins: 1, losses: 3, bestScore: 10300, worstScore: 8400},
    {id: 7, name: 'Jessica', wins: 6, losses: 4, bestScore: 11100, worstScore: 9400},
    {id: 8, name: 'Louise', wins: 3, losses: 1, bestScore: 10550, worstScore: 4400}
];

class AddPlayers extends Component {
    static navigationOptions = {
        title: 'Fill Your Roster',
        headerStyle: {
            backgroundColor: '#0b7a75'
        },
        headerTitleStyle: {
            color: 'white'
        }
    };

    onExistingPlayerPress() {

    }

    onNewPlayerPress() {

    }

    onReadyButtonPress() {

    }

    componentWillMount() {
        // this.props.playersFetch();

        this.createDataSource(DATA);
    }

    componentWillReceiveProps(nextProps) {
        //this.createDataSource(nextProps);
    }

    createDataSource(players) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(players);
    }

    renderRow(player) {

        return <PlayerListItem player={player}/>;
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{flex: 1}}>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 2}}>
                        <Button
                            buttonStyleDyn={styles.existingButtonStyle}
                            onPress={this.onExistingPlayerPress.bind(this)}>
                            Add Existing Player
                        </Button>
                    </View>
                    <View style={{flex: 2}}>
                        <Button
                            buttonStyleDyn={styles.newButtonStyle}
                            onPress={this.onNewPlayerPress.bind(this)}>
                            Add New Player
                        </Button>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Button
                            textStyleDyn={styles.readyButtonTextStyle}
                            buttonStyleDyn={styles.readyButtonStyle}
                            onPress={this.onReadyButtonPress.bind(this)}>
                            Ready!
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5
    },
    existingButtonStyle: {},
    newButtonStyle: {},
    readyButtonTextStyle: {
        fontSize: 30,
        paddingTop: 4,
        paddingBottom: 4,
    },
    readyButtonStyle: {}
});


// const mapStateToProps = (state) => {
//     return {};
// };

export default AddPlayers;