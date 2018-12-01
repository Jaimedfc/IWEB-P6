import React from 'react';
import Actionbar from "./Actionbar";
import Content from "./Content";
export default class Game extends React.Component {
	render() {
		return(
			<div>
				<Content question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}/>
				<Actionbar/>
			</div>
			);
	}
}