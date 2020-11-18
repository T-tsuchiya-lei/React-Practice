import React, { Component } from 'react';
import './../index.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
//import Page_list from './Page_list';
import PageList from './../containers/ListContainer';
import PagePost from './../containers/PostContainer';
import Pages from './Pages';

class App extends React.Component {
  componentDidMount() {
    fetch('/data/data.json')
      .then(response => { return response.json() })
      .then(data => {
        this.props.init(data);
      });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/A" component={PageList} />
          <Route path="/B" component={PagePost} />
          <Route path="/" component={Pages} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App