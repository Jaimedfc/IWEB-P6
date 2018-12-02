import React from 'react';
export default class Actionbar extends React.Component {
	render() {
		return(
			<button name="button" onClick={this.props.buttonFunc}>{this.props.buttonName}</button>
			);
	}
}