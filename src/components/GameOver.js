import React, { Component } from 'react';
import {Card, CardSection, Button } from "../components/common/index";
import { connect } from 'react-redux';

class GameOver extends Component {
    static navigationOptions = {
        title: 'Game Over',
        headerStyle: {
            backgroundColor: '#0b7a75'
        },
        headerTitleStyle:  {
            color: 'white'
        }
    };

    onButtonPress() {

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}


const mapStateToProps = (state) => {
    return {};
};

export default GameOver;