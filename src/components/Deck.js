import React, {Component} from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => {},
            onPanResponderMove: (event, gesture) => {
                position.setValue({x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: () => {}
        });

        this.panResponder = panResponder;
        this.position = position;
    }

    getCardStyle() {
        const rotate = this.position.x.interpolate({
            inputRange: [-500, 0, 500],
            outputRange: ['-90deg', '0deg', '90deg']
        });

        return {
            ...this.position.getLayout(),
            transform: [{ rotate }]
        }
    }

    renderCards() {
        return this.props.data.map((item, index) => {
            if (index === 0) {
                return (
                    <Animated.View
                        key={item.id}
                        style={this.getCardStyle()}
                        {...this.panResponder.panHandlers}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                );
            }

            return this.props.renderCard(item);
        });
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        )
    }
}

export default Deck;