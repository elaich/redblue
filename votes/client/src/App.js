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

  componentDidMount() {
    axios.get('/api/vote').then(response => this.setState(response.data));
  }

  render() {
    const {vote} = this.state;
    const options = [
      {
        text: 'Red',
        vote: RED,
        className:
          'btn btn-block btn-danger ' + (vote === BLUE ? 'disabled' : ''),
        'data-cy': 'red-button',
        voted: vote === RED,
      },
      {
        text: 'Blue',
        vote: BLUE,
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
    const {text, vote} = props;
    return <Option onClick={() => this.vote({text, vote})} {...props} />;
  };

  vote = vote => {
    axios.post('/api/vote', vote).then(() => this.setState(vote));
  };
}

export default App;
