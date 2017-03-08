/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Question from './componets/question.js';
import MyScene from './componets/myscene.js';

export default class AwesomeProject extends Component {
  render() {
    const questionDeck = require('./sampleData/questionDeck.js');
    deckSize = questionDeck.length;
    let questionIterator = 0;
    let navIndex = 0;
    let state = false;
    return (

      <Navigator
        initialRoute={{title: 'Question', index: navIndex, question: questionDeck[questionIterator] }}
        renderScene={(route, navigator) =>
          <Question
            disabled={state}
            question={route.question.question}
            answers={route.question.answers}
            correct={route.question.correct}
            onPress={
              (result) => {
                questionIterator++
                console.log("The answer result is:", result)
                if (deckSize > questionIterator){
                  navigator.push({title: "Next Question", index: navIndex++ , question: questionDeck[questionIterator]})
                }else {
                  questionIterator = 0;
                  navIndex = 0;
                  navigator.push({title: "Next Question", index: navIndex++ , question: questionDeck[questionIterator]})
                }


              }

            }
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
