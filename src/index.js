import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css'

import App from './App'
import Home from './components/home/Home'
import Dashboards from './components/dashboard/dashboards'
import Dashboard from './components/dashboard/dashboard'
import Login from './components/login/login'
import UtilityBillings from './components/billing/UtilityBillings'
import UtilityBilling from './components/billing/UtilityBilling'
//import About from './components/about/about';
//import Repos from './components/repos/repos';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
	  	<IndexRoute component={Home} />
      <Route path="/billings" component={UtilityBillings}>
        <Route path="/billing/:sub" component={UtilityBilling} />
      </Route>
	  	<Route path="/login" component={Login}/>
	  	<Route path="/dashboards" component={Dashboards}>
	  		<Route path="/dashboard/:userName/:dashName" component={Dashboard} />
	  	</Route>
  	</Route>
  </Router>
  ,
  document.getElementById('root')
);
