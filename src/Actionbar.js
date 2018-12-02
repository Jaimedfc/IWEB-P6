import React from 'react';
import Button from "./Button";
import { questions }from "./assets/mock-data";

export default class Actionbar extends React.Component {
	render() {
		return(
			<div>
				<span>
					<Button buttonName="Submit" buttonFunc={ () => {
						return this.props.onSubmit(this.props.questions,questions);
						}
					}/>

					<Button buttonName="Previous Question" buttonFunc={ () => {
						if (this.props.iCurrentQuestion!==0){
							return this.props.onChangeQuestion(this.props.iCurrentQuestion-1);
						}else{
							return;
						}
						}
					}/>

					<Button buttonName="Next Question" buttonFunc={ () => {
						if (this.props.iCurrentQuestion===(this.props.questions.length-1)){
							return;
						}else{
							return this.props.onChangeQuestion(this.props.iCurrentQuestion+1);
						}
						}
					}/>
				</span>
			</div>
			);
	}
}