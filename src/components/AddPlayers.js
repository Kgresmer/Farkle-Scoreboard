import React, {Component} from 'react';
import {Button} from "../components/common";
import {StyleSheet, View, ListView} from "react-native";
import PlayerListItem from "./PlayerListItem";
import {AddNewPlayer} from "./AddNewPlayer";
import { connect } from 'react-redux';
import {removePlayerToRoster, playerDeleted} from "../actions";

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

    state = {showNewPlayerModal: false, showExistingPlayerModal: false};

    onExistingPlayerPress() {

        this.setState({showExistingPlayerModal: true});

    }

    onNewPlayerPress() {

        this.setState({showNewPlayerModal: true});

    }

    onReadyButtonPress() {

    }

    closeAddNewPlayerModal() {
        this.setState({showNewPlayerModal: false});
    }

    componentWillMount() {
        this.createDataSource([]);
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
                <AddNewPlayer
                    visible={this.state.showNewPlayerModal}
                    closeModal={this.closeAddNewPlayerModal.bind(this)}
                />
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


const mapStateToProps = (state) => {
    return {roster: state.roster};
};

export default connect(mapStateToProps, {
    removePlayerToRoster,
    playerDeleted
})(AddPlayers);