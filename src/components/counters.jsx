import React from 'react';
import Counter from "./counter";
class Counters extends React.Component{
    state={
        counters:[
            {
                id:1,
                value:1
            },
            {
                id:2,
                value:2
            },
            {
                id:3,
                value:3
            },
            {
                id:4,
                value:4
            }
        ]
    }
    handleReset=()=>{
            const counters=this.state.counters.map(c=>{
                c.value=0;
                return c;
            }
        )
        this.setState({counters});

    }
    handleDelete=(counterId)=>
    {
        // console.log("Delete event handler called",counterId);
        const counters=this.state.counters.filter(c=>c.id!=counterId);
        console.log("Counters  after delete",counters)
        this.setState({counters});
    }
    render(){
        
        return(
            
            <div>
            {

                this.state.counters.map(
                    counter=>(
                    <Counter 
                    key={counter.id}   //key attribute is used interbally by react .can't get it
                    // id={counter.id} 
                    // value={counter.value}
                    counter={counter}
                    onDelete={this.handleDelete}>
                    <h4>Title</h4>
                    <h4>Counter #{counter.id}</h4>

                    </Counter>
                    )
                )
            }
            }
            <button onClick={this.handleReset} className="btn btn-primary btn-sm-m-2">Reset</button>

            </div>
        );
    }

}
export default Counters;