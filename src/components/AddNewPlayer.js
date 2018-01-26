import React from 'react';
import {Text, View, Modal, StyleSheet} from 'react-native';
import {CardSection} from './common/CardSection';
import {Button} from './common/Button';
import {Card} from "./common/Card";
import {Input} from "./common/Input";


const Confirm = ({children, visible}) => {
    const {cardSectionStyles, textStyles, containerStyles} = styles;

    const addPlayer = () => {
        // call action creator
        visible = false;
    };

    const cancelAddPlayer = () =>  {
        visible = false;
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
          >
          <View style={containerStyles}>
              <Card dynamicStyles={cardSectionStyles}>
                  <CardSection>
                      <Text style={textStyles}>Enter Player Name</Text>
                      <Input
                          label="Name"
                          keyboardType="default"
                          placeholder="Name"
                      />
                  </CardSection>
                  <CardSection>
                      <Button onPress={cancelAddPlayer()}>Cancel</Button>
                      <Button onPress={addPlayer()}>Add</Button>
                  </CardSection>
              </Card>
          </View>
      </Modal>
    );
};

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

export {Confirm};