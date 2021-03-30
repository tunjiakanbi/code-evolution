import './CSS/Info.css';
import React, {Component} from 'react';

class Info extends Component {
    render() {
        return (
        <h1 className="User-heading">Welcome Info: {this.props.name}</h1>
        // the key this is using the reserved this keyword
       
        );
    }
}

export default Info;