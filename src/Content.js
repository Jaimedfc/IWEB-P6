import React from 'react';
import Question from "./Question";
import Answer from "./Answer";
import Tips from "./Tips";
export default class Content extends React.Component {

	constructor(props){
		super(props);
		this.isFinished = this.isFinished.bind(this);
		this.emptyQuestion = this.emptyQuestion.bind(this);
	}

	emptyQuestion(question){
		if (typeof question === "undefined"){
			return(
				<img src="sadHomer.png" width="400px" height="400px" alt="Persona triste"/>
			);
		}else{
            return(
            	<img src={question.attachment.url} width="400px" height="400px" alt="Imagen de la pregunta"/>
			);
		}
	}

	isFinished(isFinished, question){
			if (isFinished) {
				return(
					<img src="http://img.europapress.es/fotoweb/fotonoticia_20141218121003_800.jpg" width="400px" height="400px" alt="¡Viva!"/>
				);
			}else{
				return(
					this.emptyQuestion(this.props.question)
				);
			}
	}
	render() {
		return(
			<div>
			<span>
				{this.isFinished(this.props.isFinished,this.props.question)}
			</span>
			<span>	
				<Question question={this.props.question}
					isFinished={this.props.isFinished}/>
				<Answer question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}
					isFinished={this.props.isFinished}
					score={this.props.score}
					questions={this.props.questions}/>
				<Tips question={this.props.question}/>
			</span>
			</div>
			);
	}
}