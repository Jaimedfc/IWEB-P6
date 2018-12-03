import React from 'react';
export default class Answer extends React.Component {

	constructor(props){
		super(props);
		this.emptyQuestion = this.emptyQuestion.bind(this);
		this.gameEnded = this.gameEnded.bind(this);
	}

	emptyQuestion(question){
		if (typeof question === "undefined"){
			return (
				<h1>no existen preguntas.</h1>
				);
		}else{
			return (
				<span>
				<input type='text' value={question.userAnswer || ""} onChange={(e)=>{
			 		this.props.onQuestionAnswer(e.target.value);
			 	}}/>
				</span>
				);
		}
	}

	gameEnded(isFinished,score,question){
	if (isFinished){
			return(
			<span>
				<h1>Su puntuación es de: {score} puntos.</h1>
			</span>
			);
		}else{
			return this.emptyQuestion(question);
		}

	}
	render() {
		return this.gameEnded(this.props.isFinished, this.props.score,this.props.question);
	}
}