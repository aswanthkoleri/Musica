import React from 'react';

export default class Action extends React.Component {
	searchResult=(e)=>{
		e.preventDefault();
		const that = this;
		const searchQuery = e.target.elements.searchInput.value;
		/* Youtube API Key : AIzaSyAtLuyBJkz3lr9gRb65HcBPnQYiCtA9v5M */
		/* e.target.elements.optionInput.value=""; */
		fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+searchQuery+'&key=AIzaSyAtLuyBJkz3lr9gRb65HcBPnQYiCtA9v5M')
		.then(function(response){
			return response.json();
		}).then(function(data){
			console.log(data.items);
			console.log(data.items[0].id.videoId);
			var items = data.items[0].id.videoId;
			that.props.searchResult(data.items);
		});
	}
	render(){
		const content = (
		<div className="search">
		<form onSubmit={this.searchResult}>
		<input className="searchBox" type="text" name="searchInput"/>
		<div className="buttonArea">
		<button className="searchButton"> Search </button>
		</div>
		</form>
		</div>
		);
		return content;
	} 
};