import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <h1>React</h1>
      <ul className="pages__container">
        <li><Link to="/A" className={(location.pathname === '/A') ? 'selected' : ''}>投稿一覧</Link></li>
        <li><Link to="/B" className={(location.pathname === '/B') ? 'selected' : ''}>新規投稿</Link></li>
        {/* この書き方をするなら、classnamesっていうプラグインがおすすめ */}
        {/* https://www.yoheim.net/blog.php?q=20180701 */}
      </ul>
    </div>
  );
}

export default Pages;
