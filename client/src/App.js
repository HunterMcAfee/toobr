import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import Lists from './components/Lists';

import MovieList from './components/MovieList';
import NewMovieList from './components/NewMovieList';
import EditMovieList from './components/EditMovieList';
import MovieSearch from './components/MovieSearch';
import Movie from './components/Movie';

import ShowList from './components/ShowList';
import NewShowList from './components/NewShowList';
import EditShowList from './components/EditShowList';
import ShowSearch from './components/ShowSearch';
import Show from './components/Show';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />

          <Route exact path="/" component={Lists} />

          <Route exact path="/movie_lists/:id" component={MovieList} />
          <Route exact path="/newMovieList" component={NewMovieList} />
          <Route exact path="/movie_lists/:id/edit" component={EditMovieList} />
          <Route exact path="/movie_lists/:id/search" component={MovieSearch} />
          <Route exact path="/movie_lists/:movie_list_id/movies/:movie_id" component={Movie} />

          <Route exact path="/show_lists/:id" component={ShowList} />
          <Route exact path="/newShowList" component={NewShowList} />
          <Route exact path="/show_lists/:id/edit" component={EditShowList} />
          <Route exact path="/show_lists/:id/search" component={ShowSearch} />
          <Route exact path="/show_lists/:show_list_id/shows/:show_id" component={Show} />
        </div>
      </Router>
    );
  }
}

export default App;
