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
				<img src="sadHomer.png" alt="Persona triste"/>
			);
		}else{
            return(
            	<img src={question.attachment.url} alt="Imagen de la pregunta"/>
			);
		}
	}

	isFinished(isFinished, question){
			if (isFinished) {
				return(
					<img src="http://img.europapress.es/fotoweb/fotonoticia_20141218121003_800.jpg" alt="¡Viva!"/>
				);
			}else{
				return(
					this.emptyQuestion(this.props.question)
				);
			}
	}
	render() {
		return(
			<div key="Content" className="Content">
			<div className="Image">
				{this.isFinished(this.props.isFinished,this.props.question)}
			</div>
			<div className="QuestionAnswerTips">
				<Question question={this.props.question}
					isFinished={this.props.isFinished}/>
				<Answer question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}
					isFinished={this.props.isFinished}
					score={this.props.score}
					questions={this.props.questions}/>
				<Tips question={this.props.question} isFinished={this.props.isFinished}/>
			</div>
				<div className="SaltoDeLinea">

				</div>
			</div>
			);
	}
}