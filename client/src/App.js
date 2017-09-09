import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Lists from './components/Lists';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Lists} />
          <Route exact path="/movie_lists/:id" component={MovieList} />
        </div>
      </Router>
    );
  }
}

export default App;
