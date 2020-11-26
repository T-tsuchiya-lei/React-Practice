import React　from 'react';
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
// これは、正常に動作したときの挙動しか書いていないから、うまくデータを受け取れなかった場合の処理を、.catchで書いておくといいよ。
// エラーモーダルを出すとか。
// ちなみに、L案件では、axiosっていうのを使って、APIサーバーから情報を取得してる。
// https://qiita.com/ksh-fthr/items/2daaaf3a15c4c11956e9
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
