import React from 'react';
import Counter from "./counter";


class Counters extends React.Component{
   
    styles={
        fontSize:40,
        fontWeight:"bold"
    }
    
    
    render(){
        // console.log(this.props.counters);
        return(
            <div>
            <h1 style={this.styles}>Counter React app!!</h1><br></br>

                <button onClick={this.props.onReset} className="btn btn-primary btn-sm-m-2">Reset</button>
                
                  {this.props.counters.map(
                    counter=>(
                    <Counter 
                    key={counter.id}   //key attribute is used interbally by react .can't get it
                    // id={counter.id} 
                    // value={counter.value}
                    counter={counter}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}>
                    <h4>Title: Counter #{counter.id}</h4>
                    </Counter>
                    )
                )}
            
            </div>
        );
    }

}
export default Counters;