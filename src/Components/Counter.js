import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                count: 0
        }
    }
    increment() {
        //a. this.state.count = this.state.count + 1
        //b.     this.setState({
        //         count: this.state.count + 1,
        //     }, ()=> {
        //         console.log('Correct Value', this.state.count)
        //     })
        //     console.log(this.state.count)  
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))  
        console.log(this.state.count)  
         }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div className="counts">
                Count - {this.state.count}
                {/* <button onClick={()=> this.increment()}>Increment</button> */}
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
