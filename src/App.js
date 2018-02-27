import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Loopr from './Loopr'

class App extends Component {
    render() {
        return ( 
            <div className = "App">
                    <p className = "App-intro">
                        now serving microwavemansion.com/loops!
                    </p> 
                    <Loopr/> 
            </div>
        );
    }
}

export default App;
