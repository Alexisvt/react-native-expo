// @flow
import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

interface IDeckProps {
  renderCard(item: Object): any;
  data: any[];
}

class Deck extends Component {

  props: IDeckProps;
  position = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      this.position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => { }
  });

  renderCards() {
    return this.props.data.map(item => this.props.renderCard(item));
  }

  render() {
    return (
      <Animated.View
        style={this.position.getLayout()}
        {...this.panResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;