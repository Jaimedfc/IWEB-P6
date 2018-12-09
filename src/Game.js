import React from 'react';
import Actionbar from "./Actionbar";
import Content from "./Content";
export default class Game extends React.Component {
	render() {
		return(
			<div key="Game" className="Game">
				<Content question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}
					isFinished={this.props.isFinished}
					score={this.props.score}
					questions={this.props.questions}
					time={this.props.time}/>
				<Actionbar question={this.props.question}
					onSubmit={this.props.onSubmit}
					onInitQuestions={this.props.onInitQuestions}
					onChangeQuestion={this.props.onChangeQuestion}
					iCurrentQuestion={this.props.iCurrentQuestion}
					questions={this.props.questions}
					score={this.props.score}
					isFinished={this.props.isFinished}/>
			</div>
			);
	}
}