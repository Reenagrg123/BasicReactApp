import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: "",
      incrementedCount: ""
    };
  }
  componentDidMount() {
    //best place for ajax call to get data from server,calls after rendering
    // console.log("App mounted");
  }

  render() {
    // console.log("App rendered");

    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.totalCount}
          incrementedCount={this.state.incrementedCount}
        />

        <main className="container">
          <Counters
            calculateTotalCount={this.handleTotalCount}
            calculateIncrementedCount={this.handleIncrementedCount}
          />
        </main>
      </React.Fragment>
    );
  }

  // Handlers
  handleTotalCount = count => {
    this.setState({ totalCount: count });
  };

  handleIncrementedCount = count => {
    this.setState({ incrementedCount: count });
  };
}

export default App;
