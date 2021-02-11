import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from '../../containers/SearchPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={SearchPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
