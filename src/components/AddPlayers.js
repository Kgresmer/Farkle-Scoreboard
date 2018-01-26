import React, { Component } from 'react';
import {Card, CardSection, Button } from "../components/common/index";
import { connect } from 'react-redux';
import {StyleSheet} from "react-native";

class AddPlayers extends Component {
    static navigationOptions = {
        title: 'Fill Your Roster',
        headerStyle: {
            backgroundColor: '#ff7f41'
        },
        headerTitleStyle:  {
            color: 'white'
        }
    };

    onExistingPlayerPress() {

    }

    onNewPlayerPress() {

    }

    onReadyButtonPress() {

    }

    render() {
        return (
            <Card>
                <CardSection style={styles.playerButtonsContainer}>
                    <Button onPress={this.onExistingPlayerPress.bind(this)}>
                        Add Existing Player
                    </Button>
                    <Button onPress={this.onNewPlayerPress.bind(this)}>
                        Add New Player
                    </Button>
                    <Button onPress={this.onReadyButtonPress.bind(this)}>
                        Ready!
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    playerButtonsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',

    }
});


const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(AddPlayers);