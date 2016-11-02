import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class Rating extends React.Component {
  render() {
    return (
      <View>
        <Text>{'Rating: ' + '🌟'.repeat(this.props.count)}</Text>
      </View>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 1,
    }
  }

  render() {
    return (
      <View>
        <Rating
          count={this.state.counter}
        />
        <TouchableOpacity
          onPress={() => this.setState({ counter: this.state.counter + 1 })}
        >
          <Text>Up Vote</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
