import React from 'react';
import Actionbar from "./Actionbar";
import Content from "./Content";
export default class Game extends React.Component {
	render() {
		return(
			<div>
				<Content question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}
					isFinished={this.props.isFinished}
					score={this.props.score}/>
				<Actionbar question={this.props.question}
					onSubmit={this.props.onSubmit}
					onInitQuestions={this.props.onInitQuestions}
					onChangeQuestion={this.props.onChangeQuestion}
					iCurrentQuestion={this.props.iCurrentQuestion}
					questions={this.props.questions}
					score={this.props.score}/>
			</div>
			);
	}
}