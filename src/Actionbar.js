import React from 'react';
import Button from "./Button";


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
					<span>
						<Button buttonName="Play new game" buttonFunc={ () => {
							return onInitQuestions();
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
							return onInitQuestions();
							}
						}/>
					</span>
				);
		}
	}
	render() {
		return(
			<div>
				{this.isFinished(this.props.isFinished,this.props.onSubmit,this.downloadQuestions,this.props.questions,this.props.onChangeQuestion,this.props.iCurrentQuestion)}
			</div>
			);
	}
}