import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Lists from './components/Lists';

import MovieList from './components/MovieList';
import NewMovieList from './components/NewMovieList';
import EditMovieList from './components/EditMovieList';
import MovieSearch from './components/MovieSearch';
import Movie from './components/Movie';

import ShowList from './components/ShowList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Lists} />

          <Route exact path="/movie_lists/:id" component={MovieList} />
          <Route exact path="/newMovieList" component={NewMovieList} />
          <Route exact path="/movie_lists/:id/edit" component={EditMovieList} />
          <Route exact path="/movie_lists/:id/search" component={MovieSearch} />
          <Route exact path="/movie_lists/:movie_list_id/movies/:movie_id" component={Movie} />

          <Route exact path="/show_lists/:id" component={ShowList} />
        </div>
      </Router>
    );
  }
}

export default App;
