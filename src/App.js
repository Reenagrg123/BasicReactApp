import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends React.Component {
  state={
    counters:[
        {
            id:1,
            value:0
        },
        {
            id:2,
            value:0
        },
        {
            id:3,
            value:0
        },
        {
            id:4,
            value:0
        }
    ]
}

// ...............................................
handleIncrement=(counter)=>{
  console.log("Clicked counter: ",counter);
   const counters=[...this.state.counters];
  // console.log("copy counters: ",copy_counters);

  const index=this.state.counters.indexOf(counter);
  console.log("Index: ",index);
  counters[index].value++;
  this.setState({counters});
  console.log("Final:",counters);
  // console.log(counters[0]);
  // console.log(new_value);
  // console.log(counters[0].value);
}
handleDeccrement=(counter)=>{
  
  // console.log("Clicked counter: ",counter);
   const counters=[...this.state.counters];
  // console.log("copy counters: ",copy_counters);

  const index=this.state.counters.indexOf(counter);
  console.log("Index: ",index);
  if (counters[index].value>0)
  {
    counters[index].value--;
    this.setState({counters});
  }
  
  console.log("Final:",counters);
  
}

// ...............................................
handleDelete=(counterId)=>
{
  // console.log("Delete event handler called",counterId);
  const counters=this.state.counters.filter(c=>c.id!=counterId);
  console.log("Counters  after delete",counters)
  this.setState({counters});
}

// ...............................................
handleReset=()=>{
  const counters=this.state.counters.map(c=>{
      c.value=0;
      return c;
  }
)
this.setState({counters});
console.log(counters);
}

  render(){
    return (
      <React.Fragment>
      <Navbar 
      TotalCounters={this.state.counters.length}
      IncrementedCounters={this.state.counters.filter(c=>c.value>0).length}/>

      <main className="container">
      <Counters 
      counters={this.state.counters}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDeccrement}
      onDelete={this.handleDelete}
      onReset={this.handleReset}/>
      </main>
      </React.Fragment>
  );
}
}

export default App;
