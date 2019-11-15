import React, { Component } from 'react';

//stateless functional component
class NavBar extends Component {
   
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            Total Counters <span className="badge badge-pill badge-secondary">{this.props.TotalCounters}</span>
            </a>
            <a className="navbar-brand" href="#">
            Counters Greater than Zero <span className="badge badge-pill badge-secondary">{this.props.IncrementedCounters}</span>
            </a>
            </nav>
         );
    }
}
 
export default NavBar;