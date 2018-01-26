import React, {Component} from 'react';
import {Card, CardSection, Button} from "../components/common/index";
import {connect} from 'react-redux';
import {StyleSheet, View} from "react-native";
import PlayerListItem from "./PlayerListItem";

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

    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <PlayerListItem employee={employee} navigation={this.props.navigation}
        />;
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 2}}>
                        <Card>
                            <CardSection style={{}}>
                                <Button
                                    buttonStyleDyn={styles.existingButtonStyle}
                                    onPress={this.onExistingPlayerPress.bind(this)}>
                                    Add Existing Player
                                </Button>
                            </CardSection>
                        </Card>
                    </View>
                    <View style={{flex: 2}}>
                        <Card>
                            <CardSection style={{}}>
                                <Button
                                    buttonStyleDyn={styles.newButtonStyle}
                                    onPress={this.onNewPlayerPress.bind(this)}>
                                    Add New Player
                                </Button>
                            </CardSection>
                        </Card>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Card >
                            <CardSection style={{}}>
                                <Button
                                    buttonStyleDyn={styles.readyButtonStyle}
                                    onPress={this.onReadyButtonPress.bind(this)}>
                                    Ready!
                                </Button>
                            </CardSection>
                        </Card>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    playerButtonsContainer: {
        flexDirection: 'row'
    },
    existingButtonStyle: {},
    newButtonStyle: {},
    readyButtonStyle: {}
});


const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(AddPlayers);