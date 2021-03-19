import './css/style.css';
import React, { Component } from 'react';


class Data extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Visitor'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render(){
         return(
            <div>
                <h1 className="data-heading">{this.state.message}</h1>
                <button onClick={ () => this.changeMessage() }>Subscribe</button>
            </div>
        )
    }   
}

export default Data;