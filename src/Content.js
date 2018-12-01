import React from 'react';
import Question from "./Question";
import Answer from "./Answer";
export default class Content extends React.Component {
	render() {
		return(
			<div>
			<span>
				<img src={this.props.question.attachment.url}/>
			</span>
			<span>	
				<Question question={this.props.question}/>
				<Answer question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}/>
			</span>
			</div>
			);
	}
}