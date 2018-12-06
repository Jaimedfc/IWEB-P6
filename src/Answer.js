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
				<h1 key="NoAnswer" className="Answer">no existen preguntas.</h1>
				);
		}else{
			return (
				<div key="Answer" className="Answer">
					<p>Su respuesta:</p>
					<input type='text' value={question.userAnswer || ""} onChange={(e)=>{
			 			this.props.onQuestionAnswer(e.target.value);
			 		}}/>
				</div>
				);
		}
	}

	gameEnded(isFinished,score,question){
	if (isFinished){
			return(
			<div key="Puntuacion" className="Answer">
				<h1>Su puntuación es de: {score}/{this.props.questions.length} puntos.</h1>
			</div>
			);
		}else{
			return this.emptyQuestion(question);
		}

	}
	render() {
		return this.gameEnded(this.props.isFinished, this.props.score,this.props.question);
	}
}