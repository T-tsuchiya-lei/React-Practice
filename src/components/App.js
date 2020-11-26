import React　from 'react';//Reactの後ろに全角スペースが入ってる。VSCode拡張機能のzenkakuを使って発見しやすくするのがおすすめ。
import './../index.css';
import { Router, Route, Switch } from 'react-router-dom';
import PageList from './../containers/ListContainer';
import PagePost from './../containers/PostContainer';
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
          <Route path="/List" component={PageList} />
          <Route path="/Post" component={PagePost} />
          <Route path="/" component={Pages} />
        </Switch>
      </Router>
    );
  }
}

export default App
