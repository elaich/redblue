import React, {Component} from 'react';
import './App.css';
import Option from './Option';
import axios from 'axios';

const BLUE = 'BLUE';
const RED = 'RED';

class App extends Component {
  state = {
    vote: null,
  };

  render() {
    const {vote} = this.state;
    const options = [
      {
        text: 'Red',
        className:
          'btn btn-block btn-danger ' + (vote === BLUE ? 'disabled' : ''),
        'data-cy': 'red-button',
        voted: vote === RED,
      },
      {
        text: 'Blue',
        className:
          'btn btn-block btn-primary ' + (vote === RED ? 'disabled' : ''),
        'data-cy': 'blue-button',
        voted: vote === BLUE,
      },
    ];

    const Components = options.map(option => this.option(option));

    return (
      <div id="app" className="container">
        <div className="row justify-content-center">
          <div className="col-6">{Components}</div>
        </div>
      </div>
    );
  }

  option = props => {
    return <Option onClick={() => this.onVote(props.text)} {...props} />;
  };

  onVote = vote => {
    axios.post('/vote').then();
  };
}

export default App;
