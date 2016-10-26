import React, { Component } from 'react';
import NavLink from '../navigation/NavLink'

class Dashboards extends Component{
	render(){
		return (
			<div>
				<h2>Dashboard</h2>
				<ul>
					<li><NavLink to="/dashboard/userA/dashA">Dashboard A</NavLink></li>
          			<li><NavLink to="/dashboard/userB/dashB">Dashboard B</NavLink></li>
				</ul>
				{this.props.children}
			</div>
			);
	}
}

export default Dashboards;