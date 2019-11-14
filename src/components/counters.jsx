import React from 'react';
import Counter from "./counter";


class Counters extends React.Component{
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
    styles={
        fontSize:40,
        fontWeight:"bold"
    }
    
    handleReset=()=>{
            const counters=this.state.counters.map(c=>{
                c.value=0;
                return c;
            }
        )
        this.setState({counters});
        console.log(counters);
    }


    handleDelete=(counterId)=>
    {
        // console.log("Delete event handler called",counterId);
        const counters=this.state.counters.filter(c=>c.id!=counterId);
        console.log("Counters  after delete",counters)
        this.setState({counters});
    }
    render(){
        console.log(this.state.counters);
        return(
            <div>
            <h1 style={this.styles}> Welcome to my Counter React app</h1><br></br>

                <button onClick={this.handleReset} className="btn btn-primary btn-sm-m-2">Reset</button>
                
                  {this.state.counters.map(
                    counter=>(
                    <Counter 
                    key={counter.id}   //key attribute is used interbally by react .can't get it
                    // id={counter.id} 
                    // value={counter.value}
                    counter={counter}
                    onDelete={this.handleDelete}>
                    <h4>Title: Counter #{counter.id}</h4>
                    </Counter>
                    )
                )}
            
            </div>
        );
    }

}
export default Counters;