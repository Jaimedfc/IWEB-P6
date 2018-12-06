import React from 'react';
export default class Navbar extends React.Component {

	constructor(props){
		super(props);
		this.showTips = this.showTips.bind(this)
		this.emptyTips = this.emptyTips.bind(this)
	}

	emptyTips(question){
		if (typeof question !== "undefined" && !this.props.isFinished ){
			if (question.tips.length !== 0){
				return (
					<div key="Tips" className="Tips">
						<h2>Tips:</h2>
						<ul key="ListaTips">
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
				<li key={"li"+id}>
					{tip}
				</li>
				);
		})

	}
	render() {
		return this.emptyTips(this.props.question);
	}
}