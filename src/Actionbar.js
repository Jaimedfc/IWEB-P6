import React from 'react';
import Button from "./Button";
import { questions }from "./assets/mock-data";

export default class Actionbar extends React.Component {

	constructor(props){
		super(props);
		this.isFinished = this.isFinished.bind(this)
	}

	isFinished(isFinished,onSubmit,newQuestions,onInitQuestions,oldQuestions,onChangeQuestion,iCurrentQuestion){
		if ( oldQuestions.length !== 0){
			if (isFinished) {
				return(
					<span>
						<Button buttonName="Play new game" buttonFunc={ () => {
							return onInitQuestions(newQuestions);
							}
						}/>
					</span>
				);
			}else{
				return(
				<span>
					<Button buttonName="Submit" buttonFunc={ () => {
						return onSubmit(oldQuestions);
						}
					}/>

					<Button buttonName="Previous Question" buttonFunc={ () => {
						if (iCurrentQuestion!==0){
							return onChangeQuestion(iCurrentQuestion-1);
						}else{
							return;
						}
						}
					}/>

					<Button buttonName="Next Question" buttonFunc={ () => {
						if (iCurrentQuestion===(oldQuestions.length-1)){
							return;
						}else{
							return onChangeQuestion(iCurrentQuestion+1);
						}
						}
					}/>
				</span>
				);
			}
		}else{
			return(
					<span>
						<Button buttonName="Play" buttonFunc={ () => {
							return onInitQuestions(newQuestions);
							}
						}/>
					</span>
				);
		}
	}
	render() {
		return(
			<div>
				{this.isFinished(this.props.isFinished,this.props.onSubmit,questions,this.props.onInitQuestions,this.props.questions,this.props.onChangeQuestion,this.props.iCurrentQuestion)}
			</div>
			);
	}
}