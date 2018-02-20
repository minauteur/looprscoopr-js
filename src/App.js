import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Loopr from './Loopr'

class App extends Component {
    render() {
        return ( 
            <div className = "App">
                <header className = "App-header">
                    <img src = {logo} className = "App-logo" alt = "logo"/>
                    <h1 className = "App-title"> LooprScoopr</h1>   
                </header>
                    <p className = "App-intro">
                        now serving microwavemansion.com/loops!
                    </p> 
                    <Loopr/> 
            </div>
        );
    }
}

export default App;
