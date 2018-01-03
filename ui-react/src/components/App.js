import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:""
    }
  }
  componentDidMount(){
    return fetch('/api/hello').then(response=>response.json()).then(responsjson=>{
      this.setState({
        name:responsjson.name
      })
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.name}
      </div>
    );
  }
}

export default App;
