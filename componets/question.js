import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';


import Answer from './answer.js';

export default class Question extends Component {

  constructor(props){
    super(props);
    this.state = {
      answered : false,
      ansColor : ['#25DDD7', '#25DDD7','#25DDD7','#25DDD7']
    };
  }

  _handleClick(ans, id){
    // Check if selected answer is correct.
    console.log('Questions handleClick ran.')
    if (!this.state.answered){
      setTimeout(this.props.onPress.bind(this,result),5000);
    }
    this.setState({answered: true});
    let result = (ans === this.props.correct);
  }

  _handleClick2(index, id){
    // check if correct
    let correctIndex = this.props.answers.indexOf(this.props.correct);
    let result = false;

    if ( correctIndex == index){
      this.state.ansColor[index] = 'green';
      result = true;
    } else {
      this.state.ansColor[index] = 'red';
      this.state.ansColor[correctIndex] = 'green';
    }
    setTimeout(this.props.onPress.bind(this,result),2000);
    this.state.answered = true;
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionBox}>
          <Text style={styles.questionTxt}>{this.props.question}</Text>
        </View>
        <View style={styles.answerBox}>
          <TouchableHighlight
            disabled={this.state.answered}
            onPress={this._handleClick2.bind(this, 0)}
            style={{
              backgroundColor: this.state.ansColor[0],
              padding: 20,
              width: Dimensions.get('window').width * .8,
              marginTop: 20,
              borderRadius: 5,
            }}>
            <Text>{this.props.answers[0]}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            disabled={this.state.answered}
            onPress={this._handleClick2.bind(this, 1)}
            style={{
              backgroundColor: this.state.ansColor[1],
              padding: 20,
              width: Dimensions.get('window').width * .8,
              marginTop: 20,
              borderRadius: 5,
            }}>
            <Text>{this.props.answers[1]}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            disabled={this.state.answered}
            onPress={this._handleClick2.bind(this, 2)}
            style={{
              backgroundColor: this.state.ansColor[2],
              padding: 20,
              width: Dimensions.get('window').width * .8,
              marginTop: 20,
              borderRadius: 5,
            }}>
            <Text>{this.props.answers[2]}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            disabled={this.state.answered}
            onPress={this._handleClick2.bind(this, 3)}
            style={{
              backgroundColor: this.state.ansColor[3],
              padding: 20,
              width: Dimensions.get('window').width * .8,
              marginTop: 20,
              borderRadius: 5,
            }}>
            <Text>{this.props.answers[3]}</Text>
          </TouchableHighlight>

        </View>
      </View>
    )
  }
}

// ===========  Styling ============
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // backgroundColor: '#fff',
  },
  questionBox: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerBox: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  answer: {
    backgroundColor: '#25DDD7',
    padding: 20,
    width: Dimensions.get('window').width * .8,
    marginTop: 20,
    borderRadius: 5,
  },
  answerTxt: {
    fontSize: 16
  },
  questionTxt: {
    fontSize: 18,
    margin: 15
  }
});
// ====== End of Styling =======

//
// <Answer
//   isCorrect={this.props.answers[3] == this.props.correct}
//   onPress={this._handleClick.bind(this, this.props.answers[3])}
//   style={styles.answer}
//   text={this.props.answers[3]}
//   disabled={this.state.answered}
// />
