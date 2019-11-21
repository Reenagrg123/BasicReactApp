import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  styles = {
    fontSize: 40,
    fontWeight: "bold"
  };

  //Lifecycle methods
  // ...............................
  constructor(props) {
    super(props);
    console.log("Counters-constructor");
    this.state = {
      counters: [
        {
          id: 1,
          value: 0
        },
        {
          id: 2,
          value: 0
        },
        {
          id: 3,
          value: 0
        },
        {
          id: 4,
          value: 0
        }
      ]
    };
  }
  componentDidMount() {
    console.log("Counters mounted");
    var { calculateTotalCount, calculateIncrementedCount } = this.props;
    const count = this.state.counters.length;
    // calculateTotalCount(count);

    //............
    var incCounters = this.state.counters.filter(c => c.value > 0).length;
    // calculateIncrementedCount(incCounters);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("counters didupdate");
    console.log(prevState.counters);
    console.log(this.state.counters);
    debugger;
    if (prevState.counters != this.state.counters) {
      console.log("not equal");
      var incCounters = this.state.counters.filter(c => c.value > 0).length;
      this.props.calculateIncrementedCount(incCounters);
    }
  }

  render() {
    console.log("counters rendered");
    return (
      <div
        onLoad={() => {
          console.log("on load");
          // this.props.CalculateCount(this.state.counters);
        }}
      >
        <h1 style={this.styles}>Counter React app!!</h1>
        <br></br>

        <button
          onClick={this.handleResetAll}
          className="btn btn-primary btn-sm-m-2"
        >
          Reset All{" "}
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} //key attribute is used interbally by react .can't get it
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onResetOne={this.handleResetOne}
            calculateCount={this.props.calculateCount}
          >
            <h4>Title: Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }

  // Custom Handlers
  // ...............................................
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    // console.log("Index: ", index);
    counters[index].value++;
    this.setState({ counters });
  };

  // ...............................................

  handleDecrement = counter => {
    const counters = [...this.state.counters];

    const index = this.state.counters.indexOf(counter);
    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({ counters });
    }

    console.log("Final:", counters);
    // this.calculateIncrementedCount();
  };
  // ...............................................

  handleResetOne = counter => {
    const counters = [...this.state.counters];

    const index = this.state.counters.indexOf(counter);
    console.log("Index: ", index);
    if (counters[index].value > 0) {
      counters[index].value = 0;
      this.setState({ counters });
    }

    console.log("Final:", counters);
  };

  // ...............................................
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    console.log("Counters  after delete", counters);
    this.setState({ counters });

    const totalCount = counters.length;
    this.setState({ totalCount: totalCount });
    this.props.calculateTotalCount(totalCount);
  };

  // ...............................................
  handleResetAll = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log(counters);
  };
}
export default Counters;
