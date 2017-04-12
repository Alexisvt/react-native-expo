// @flow
import React, { Component } from 'react';
import { View, Animated } from 'react-native';

interface IDeckProps {
  renderCard(item: Object): any;
  data: any[];
}

class Deck extends Component {
  props: IDeckProps;

  renderCards() {
    return this.props.data.map(item => this.props.renderCard(item));
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

export default Deck;