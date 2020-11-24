import React, { Component } from 'react';//使わないけどインポートしているものは消しておいたほうがいい
import './../index.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';//使わないけどインポートしているものは消しておいたほうがいい
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
// これは、正常に動作したときの挙動しか書いていないから、うまくデータを受け取れなかった場合の処理を、.catchで書いておくといいよ。
// エラーモーダルを出すとか。
// ちなみに、L案件では、axiosっていうのを使って、APIサーバーから情報を取得してる。
// https://qiita.com/ksh-fthr/items/2daaaf3a15c4c11956e9
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
