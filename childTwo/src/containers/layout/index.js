/**
 * layout
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

const Layout = ({ children, history }) => {
  const historyPush = (path) => {
    history.push(path)
  }
  return (
    <div className="layout">
      <div className="menu">
        <div className="menuItem" onClick={() => historyPush('/')}>首页</div>
        <div className="menuItem" onClick={() => historyPush('/childOne')}>one</div>
        <div className="menuItem" onClick={() => historyPush('/childTwo/news')}>news</div>
        <div className="menuItem" onClick={() => historyPush('/childTwo/log')}>log</div>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}
export default withRouter(Layout);
   