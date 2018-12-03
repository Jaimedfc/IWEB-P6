import React from 'react';
export default class Navbar extends React.Component {

	constructor(props){
		super(props);
		this.showTips = this.showTips.bind(this)
		this.emptyTips = this.emptyTips.bind(this)
	}

	emptyTips(question){
		if (typeof question !== "undefined"){
			if (question.tips.length !== 0){
				return (
					<div>
						<h2>Tips:</h2>
						<ul>
							{this.showTips(question)}
						</ul>
					</div>
					);
			}else{
				return null;
			}
		}else{
			return null;
		}
	}
	showTips(question){
		return question.tips.map((tip,id)=>{
			return (
				<li>
					{tip}
				</li>
				);
		})

	}
	render() {
		return this.emptyTips(this.props.question);
	}
}