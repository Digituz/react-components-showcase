import React, { Component } from 'react';
import Input from '@digituz/react-input';

class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      inputValue: 'Hello, world!'
    };
  }

  onInputChange(event) {
    const inputValue = event.target.value;
    this.setState({
      inputValue,
    });
  }

  render() {
    return (
      <div>
        <h1>React Component Showcase</h1>
        <Input onChange={this.onInputChange} value={this.state.inputValue}/>
      </div>
    );
  }
}

export default App;
