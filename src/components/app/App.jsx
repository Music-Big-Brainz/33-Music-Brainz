import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from '../../containers/SearchPage';
import AlbumPage from '../../containers/AlbumPage';
import RecordingPage from '../../containers/RecordingPage';
import LyricsPage from '../../containers/LyricsPage';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route 
              exact 
              path="/" 
              component={SearchPage}
            />
            <Route 
              exact 
              path="/releases/:artistId"
              render={ (routerProps) => <AlbumPage {...routerProps} /> } 
              />
            <Route
              exact 
              path="/releases/title/:albumId/:title"
              render={ (routerProps) => <RecordingPage {...routerProps} /> } 
              />
            <Route 
              exact 
              path="/releases/:name/:artistId"
              render={ (routerProps) => <AlbumPage {...routerProps} /> } 
              />
            <Route 
              exact 
              path="/releases/:name/title/:albumId/:title"
              render={ (routerProps) => <RecordingPage {...routerProps} /> } 
              />
            <Route
              exact
              path="/releases/:name/title/:albumId/:songTitle/:recording"
              render={ (routerProps) => <LyricsPage {...routerProps} /> }
              />
          </Switch>
        </Router>
      </div>
    );
  }
}
