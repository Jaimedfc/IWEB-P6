import React from 'react';
import Question from "./Question";
import Answer from "./Answer";
export default class Content extends React.Component {

	constructor(props){
		super(props);
		this.emptyImg = this.emptyImg.bind(this);
		this.emptyQuestion = this.emptyQuestion.bind(this);
	}

	emptyImg(question){
		if (typeof question !== "undefined"){
			return question.attachment.url;
		}else{
			return;
		}
	}

	emptyQuestion(question){
		if (typeof question !== "undefined"){
			return question;
		}else{
			return "Nada";
		}
	}
	render() {
		return(
			<div>
			<span>
				<img src={this.emptyImg(this.props.question)}/>
			</span>
			<span>	
				<Question question={this.emptyQuestion(this.props.question)}
					isFinished={this.props.isFinished}/>
				<Answer question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}
					isFinished={this.props.isFinished}
					score={this.props.score}/>
			</span>
			</div>
			);
	}
}