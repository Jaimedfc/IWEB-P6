import React from 'react';
export default class Actionbar extends React.Component {
	render() {
		return(
			<button class="button" onClick={this.props.buttonFunc}>{this.props.buttonName}</button>
			);
	}
}