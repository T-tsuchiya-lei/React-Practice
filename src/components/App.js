import React from 'react';
import './../index.css';
import { Router, Route, Switch } from 'react-router-dom';
import Page_list from './../containers/ListContainer';
import Page_post from './../containers/PostContainer';
import Pages from './Pages';
import history from './../history';

class App extends React.Component {
  componentDidMount() {
    fetch('/data/data.json')
      .then(response => { return response.json() })
      .then(data => {
        this.props.init(data);
      })
      .catch(error => {
        alert('There has been a problem with your fetch operation:',error);
      });
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/List" component={Page_list} />
          <Route path="/Post" component={Page_post} />
          <Route path="/" component={Pages} />
        </Switch>
      </Router>
    );
  }
}

export default App
