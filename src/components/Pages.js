import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <h1>React</h1>
      <ul className="pages__container">
        <li><Link to="/List" className={(location.pathname === '/List') ? 'selected' : ''}>投稿一覧</Link></li>
        <li><Link to="/Post" className={(location.pathname === '/Post') ? 'selected' : ''}>新規投稿</Link></li>
      </ul>
    </div>
  );
}

export default Pages;