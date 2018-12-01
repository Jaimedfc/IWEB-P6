import React from 'react';
import Button from "./Button";

export default class Actionbar extends React.Component {
	render() {
		return(
			<div>
				<span>
					<Button buttonName="submit" buttonFunc={ () => {
						return;
						}
					}/>

					<Button buttonName="previous" buttonFunc={ () => {
						return;
						}
					}/>

					<Button buttonName="next" buttonFunc={ () => {
						return;
						}
					}/>
				</span>
			</div>
			);
	}
}