import React from 'react';
import Button from "./Button";
import {submit} from "./redux/actions";


export default class Actionbar extends React.Component {

	constructor(props){
		super(props);
		this.isFinished = this.isFinished.bind(this);
        this.downloadQuestions = this.downloadQuestions.bind(this);
	}

    downloadQuestions() {
        let token = "c003ee94c290a3df3dcd";
        let url = "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token="+token;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.props.onInitQuestions(json)
            })
            .catch(error =>{
                console.log(error)
            });

    }

	isFinished(isFinished,onSubmit,onInitQuestions,oldQuestions,onChangeQuestion,iCurrentQuestion){
		if ( oldQuestions.length !== 0){
			if (isFinished) {
				return(
					<div key="NewGame" className="ActionBar">
						<Button buttonName="Play new game"  keyB= "ButtonNewGame" buttonFunc={ () => {
							return onInitQuestions();
							}
						}/>
					</div>
				);
			}else{
				return(

				<div key="Actionbar" className="ActionBar">
					<Button buttonName="Previous Question" keyB= "ButtonPrevQuestion"  iCurrentQuestion={this.props.iCurrentQuestion} buttonFunc={ () => {
						if (iCurrentQuestion!==0){
							return onChangeQuestion(iCurrentQuestion-1);
						}else{
							return;
						}
					}
					}/>
					<Button buttonName="Submit" keyB= "ButtonSubmit" buttonFunc={ () => {
						return onSubmit(oldQuestions);
						}
					}/>

					<Button buttonName="Next Question" iCurrentQuestion={this.props.iCurrentQuestion} keyB= "ButtonNextQuestion" buttonFunc={ () => {
						if (iCurrentQuestion===(oldQuestions.length-1)){
							return;
						}else{
							return onChangeQuestion(iCurrentQuestion+1);
						}
						}
					}/>
				</div>
				);
			}
		}else{
			return(
					<div key="InitQuestion" className="ActionBar">
						<Button buttonName="Play" keyB="ButtonInitQuestion"  className="ActionBar" buttonFunc={ () => {
							return onInitQuestions();
							}
						}/>
					</div>
				);
		}
	}
	render() {
		return this.isFinished(this.props.isFinished,this.props.onSubmit,this.downloadQuestions,this.props.questions,this.props.onChangeQuestion,this.props.iCurrentQuestion);
	}
}