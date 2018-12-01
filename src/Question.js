import React from 'react';
export default class Question extends React.Component {
	render() {
		return(
			<span>
			<p>{this.props.question.question}</p>
			</span>
			);
	}
}