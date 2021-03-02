import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      string: 'Hello Murat'
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {this.state.string}
        </p>
        <button onClick={()=> this.setState({string : 'Hey Murat, how are you?'})}> Change the Text</button>
      </header>
    </div>
  );
}
}

export default App;
