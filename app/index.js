import React from 'react';
import ReactDOM from 'react-dom';
require('./main.css');

class App extends React.Component {
  render() {
    return(
      <div>
        teste
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(
  <App />,
  app
);
