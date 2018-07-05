import React from 'react';
import Action from './action';
import Display from './display';
/*	Display  */
export default class MainApp extends React.Component {
	state={
		result : this.props.result
	};
	
	searchResult=(result)=>{
		this.setState((prevState)=>{
			return {
				result : result
		};
	});
	console.log(this.state.result);
}

	render() {
	const content = (
		<div>
		<Action searchResult={this.searchResult}/>
		<Display results={this.state.result} />
		</div>
		);
		return content;
	}
}

MainApp.defaultProps = {
	result : []
};