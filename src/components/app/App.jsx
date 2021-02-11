import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistByName from '../../containers/ArtistByName';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ArtistByName} />
          </Switch>
        </Router>
      </div>
    );
  }
}
