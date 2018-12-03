import React from 'react';
export default class Question extends React.Component {

	constructor(props){
		super(props);
		this.gameEnded = this.gameEnded.bind(this);
		this.emptyQuestion = this.emptyQuestion.bind(this);
	}

	emptyQuestion(question){
		if (typeof question === "undefined"){
			return "Lo sentimos mucho,"
		}else{
			return question;
		}
	}

	gameEnded(finished,question){
		if (finished){
			return(
			<span>
				<h1>Enhorabuena, has acabado el cuestionario.</h1>
			</span>
			);
		}else{
			if (typeof question.question !== "undefined"){
				return(
				<span>
					<h1>{question.question}</h1>
				</span>
				);
			}else{
				return(
				<span>
					<h1>{question}</h1>
				</span>
				);
			}
		}
	}

	render() {
		return(
			<div>
				{this.gameEnded(this.props.isFinished, this.emptyQuestion(this.props.question))}
			</div>
			);
	}
}