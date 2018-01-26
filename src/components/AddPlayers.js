import React, {Component} from 'react';
import {Card, CardSection, Button} from "../components/common/index";
import {connect} from 'react-redux';
import {StyleSheet, View} from "react-native";

class AddPlayers extends Component {
    static navigationOptions = {
        title: 'Fill Your Roster',
        headerStyle: {
            backgroundColor: '#ff7f41'
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

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                <Card style={styles.playerButtonsContainer}>
                    <CardSection style={{}}>
                        <Button
                            buttonStyleDyn={styles.existingButtonStyle}
                            onPress={this.onExistingPlayerPress.bind(this)}>
                            Add Existing Player
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection style={{}}>
                        <Button
                            buttonStyleDyn={styles.newButtonStyle}
                            onPress={this.onNewPlayerPress.bind(this)}>
                            Add New Player
                        </Button>
                    </CardSection>
                </Card>
                <Card dynamicStyles={{justifyContent: 'flex-end'}}>
                    <CardSection style={{}}>
                        <Button
                            buttonStyleDyn={styles.readyButtonStyle}
                            onPress={this.onReadyButtonPress.bind(this)}>
                            Ready!
                        </Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    playerButtonsContainer: {},
    existingButtonStyle: {

    },
    newButtonStyle: {

    },
    readyButtonStyle: {

    }
});


const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(AddPlayers);