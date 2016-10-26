import React, { Component } from 'react';
import NavLink from '../navigation/NavLink'

class UtilityBillings extends Component{
	render(){
		return (
			<div>
				<h2>Utility Billing</h2>
				<ul>
					<li><NavLink to="/billing/Account">Account</NavLink></li>
          			<li><NavLink to="/billing/Bill">Bill</NavLink></li>
				</ul>
				{this.props.children}
			</div>
			);
	}
}

export default UtilityBillings;