import React, { Component } from "react";

//stateless functional component
const NavBar = props => {
  //   console.log("Nav-bar rendered")
  const count = props.calculateCount;
  console.log("Nav-bar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Counters{""}
        <span className="badge badge-pill badge-secondary">
          {props.totalCount}
        </span>
      </a>
      <a className="navbar-brand" href="#">
        Counters Greater than Zero{" "}
        <span className="badge badge-pill badge-secondary">
          {props.incrementedCount}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
