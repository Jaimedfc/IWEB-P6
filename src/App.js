import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Game from "./Game";
import Navbar from "./Navbar";
import {questionAnswer} from './redux/actions';
import {submit} from './redux/actions';
import {changeQuestion} from './redux/actions';
import {initQuestions} from './redux/actions';


class App extends Component {
  render() {
    console.log(this.props.questions)
    return (
      <div>
        <Navbar/>
        <Game question={this.props.questions[this.props.currentQuestion]}
              score={this.props.score}
              isFinished={this.props.finished}
              iCurrentQuestion={this.props.currentQuestion}
              questions={this.props.questions}
              onQuestionAnswer={(answer) => {
                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
              }}
              onChangeQuestion={(nextQuestion)=>{
                this.props.dispatch(changeQuestion(nextQuestion))
              }}
              onSubmit={(questions)=>{
                this.props.dispatch(submit(questions))
              }}
              onInitQuestions={(questions)=>{
                this.props.dispatch(initQuestions(questions))
              }} />
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {

    ...state
  };
}

export default connect(mapStateToProps)(App);
