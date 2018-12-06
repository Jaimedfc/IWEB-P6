import React from 'react';
export default class Actionbar extends React.Component {
	constructor(props){
		super(props);
		this.desactivateButton = this.desactivateButton.bind(this);
	}

	desactivateButton(index){
		switch (this.props.buttonName) {
			case "Previous Question":
				if(index===0){
					return true;
				}else {
					return false;
				}
			case "Next Question":
				if(index===9){
					return true;
				}else {
					return false;
				}
			default:
				return false;

		}
	}
	render() {
		return(
			<button name="button" disabled={this.desactivateButton(this.props.iCurrentQuestion)} className="Button" key = {this.props.keyB} onClick={this.props.buttonFunc}>{this.props.buttonName}</button>
			);
	}
}