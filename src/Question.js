import React from 'react';
export default class Question extends React.Component {

	constructor(props){
		super(props);
		this.gameEnded = this.gameEnded.bind(this);
	}

	gameEnded(finished,question){
		if (finished){
			return(
			<div className="Question">
				<h1>Enhorabuena, has acabado el cuestionario.</h1>
			</div>
			);
		}else{
			if (typeof question !== "undefined"){
				return(
				<div className="Question">
					<h1>{question.question}</h1>
				</div>
				);
			}else{
				return(
				<div className="Question">
					<h1>Lo sentimos mucho,</h1>
				</div>
				);
			}
		}
	}

	render() {
		return this.gameEnded(this.props.isFinished,this.props.question);
	}
}