import logo from './logo.svg';
import './App.css';

import  { Component } from "react";

export default class Hsu extends Component{
    render(){
        return(


<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Hsu.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          love Big D
        </a>
      </header>
    </div>

        )
    }
}