import React from 'react';
import Question from "./Question";
import Answer from "./Answer";
import Tips from "./Tips";
export default class Content extends React.Component {

	constructor(props){
		super(props);
		this.emptyImg = this.emptyImg.bind(this);
		this.isFinished = this.isFinished.bind(this);
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
		if (typeof question === "undefined"){
			return(
			<img src="sadHomer.png" width="400px" height="400px" alt="Persona triste"/>
			);
		}else{
			return;
		}
	}

	
	isFinished(isFinished, question){
		if (typeof question !== "undefined"){
			if (isFinished) {
				return(
					<img src="http://img.europapress.es/fotoweb/fotonoticia_20141218121003_800.jpg" width="400px" height="400px" alt="!Viva!"/>
				);
			}else{
				return(
					<img src={this.emptyImg(this.props.question)} width="400px" height="400px" alt="Imagen de la pregunta"/>
				);
			}
		}else{
			return;
		}
	}
	render() {
		return(
			<div>
			<span>
				{this.emptyQuestion(this.props.question)}
				{this.isFinished(this.props.isFinished,this.props.question)}
			</span>
			<span>	
				<Question question={this.props.question}
					isFinished={this.props.isFinished}/>
				<Answer question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}
					isFinished={this.props.isFinished}
					score={this.props.score}/>
				<Tips question={this.props.question}/>
			</span>
			</div>
			);
	}
}