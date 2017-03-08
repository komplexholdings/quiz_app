import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';

export default class Answer extends Component {

  constructor(props){
    super(props);
    this.state = {
      answered : false,
      color: '#25DDD7'
    };
  }

  _handleClick(){
    if(this.props.isCorrect){
      this.setState({color: 'green'});
      setTimeout(this.props.onPress.bind(this),1000);
    }else {
      this.setState({color: 'red'});
      setTimeout(this.props.onPress.bind(this),1000);
    }
  }

  render(){
    return(
      <TouchableHighlight
        disabled={this.props.disabled}
        onPress={this._handleClick.bind(this)}
        style={{
          backgroundColor: this.state.color,
          padding: 20,
          width: Dimensions.get('window').width * .8,
          marginTop: 20,
          borderRadius: 5,
        }}>
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}
