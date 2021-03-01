import React, { Component } from 'react';
import './Hello.css'; 

// can write this as a normal function below:
// class Hello extends Component {
//     render() {
//         return (
//         <div className='f1 tc'> 
//             <h1>Hello World!</h1>
//             <p> {this.props.greeting}</p>
//         </div>
//         );
//     }
// }

// function version of Hello:
// think of react components as just functions!
const Hello = (props) => {
    return (
        <div className='f1 tc'> 
            <h1>Hello World!</h1>
            <p> {props.greeting}</p>
        </div>
        );
}
export default Hello;