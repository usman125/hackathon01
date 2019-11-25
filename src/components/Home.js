import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { setActiveRoute } from '../actions';

class Home extends React.Component {

  componentDidMount() {
    this.props.setActiveRoute('Home');
  }

  render() {
    return (
      <View>
        <Text>{this.props.hello}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { helloWorld } = state.home;
  return {
    hello: helloWorld,
  };
}

export default connect(mapStateToProps, { setActiveRoute })(Home);