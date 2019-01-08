import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Option from './Option';
import axios from 'axios';

class App extends Component {
  render() {
    const options = ['Red', 'Blue'].map(opt => (
      <Option text={opt} vote={this.onVote} />
    ));
    return <div>{options}</div>;
  }

  onVote = e => {
    axios.post('/vote').then();
  };
}

export default App;
