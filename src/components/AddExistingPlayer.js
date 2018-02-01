import React, {Component} from 'react';
import {Text, View, Modal, StyleSheet} from 'react-native';
import {CardSection} from './common/CardSection';
import {Button} from './common/Button';
import {Card} from "./common/Card";
import { connect } from 'react-redux';
import { addPlayerToRoster, playerDeleted } from '../actions';

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

class AddExistingPlayer extends Component {
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
            <Modal
                visible={visible}
                transparent
                animationType="slide"
                onRequestClose={() => {
                }}
            >
                <View style={containerStyles}>
                    <Card dynamicStyles={cardSectionStyles}>
                        <CardSection>
                            <Text style={textStyles}>{children}</Text>
                        </CardSection>
                        <CardSection>
                            <Button onPress={onAccept}>Yes</Button>
                            <Button onPress={onDecline}>No</Button>
                        </CardSection>
                    </Card>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    cardSectionStyles: {
        justifyContent: 'center',
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 5
    },
    textStyles: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
        marginBottom: 15,
        color: 'white'
    },
    containerStyles: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
});

const mapStateToProps = (state) => {
    return {roster: state.roster, playerList: state.playerList};
};

export default connect(mapStateToProps, {addPlayerToRoster, playerDeleted})(AddExistingPlayer);