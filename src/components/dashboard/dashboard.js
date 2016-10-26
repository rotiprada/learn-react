import React, { Component } from 'react';

class Dashboard extends Component{
	render(){
		return (
			<div>
				<h2>{this.props.params.dashName}</h2>
			</div>
			);
	}
}

export default Dashboard;