import React, { Component } from 'react'
import { Link } from 'react-router'
import './App.css'
//import logo from './logo.svg';
import reactlogo from './react-logo.png'
import NavLink from './components/navigation/NavLink'

class App extends Component {
  constructor(){
    super();
    this.state = { loggedIn: false };
  }
  render() {
    return (
      <div className="App-lay">
        <div className="App-header-lay">
          <img src={reactlogo} className="App-logo" alt="logo" />
          <span className="App-name">Application Name</span>
        </div>
        <div className="App-blank"></div>
        <div className="App-header-nav">
          <ul className="App-menu" role="nav">
            <li>
              <NavLink to="/" onlyActiveOnIndex={true}>
                <i className="fa fa-home App-menu-icon"/> Home
              </NavLink>
            </li>
            <li><NavLink to="/billings"><i className="fa fa-calculator App-menu-icon" /> Utility Billing</NavLink></li>
            <li><NavLink to="/login"><i className="fa fa-user App-menu-icon" /> Login</NavLink></li>
            <li><NavLink to="/dashboards"><i className="fa fa-dashboard App-menu-icon" /> Dashboard</NavLink></li>
            <li><NavLink to="/dashboards"><i className="fa fa-laptop App-menu-icon" /> Library</NavLink></li>
            <li><NavLink to="/dashboards"><i className="fa fa-user-plus App-menu-icon" /> New Application</NavLink></li>
            <li><NavLink to="/dashboards"><i className="fa fa-sticky-note-o App-menu-icon" /> Others</NavLink></li>
            <li><NavLink to="/dashboards"><i className="fa fa-question App-menu-icon" /> Help</NavLink></li>
          </ul>
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <footer className="App-footer">Copyright@2016</footer>
      </div>
    );
  }
}

export default App;
