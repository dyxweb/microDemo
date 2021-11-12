/**
 * 主应用的layout
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
      <div className="header">
        <div className="headerItem" onClick={() => historyPush('/')}>首页</div>
        <div className="headerItem" onClick={() => historyPush('/childOne')}>one</div>
        <div className="headerItem" onClick={() => historyPush('/childTwo')}>two</div>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}
export default withRouter(Layout);
   