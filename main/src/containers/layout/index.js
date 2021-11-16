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
    <div className="main-layout">
      <div className="main-header">
        <div className="main-headerItem" onClick={() => historyPush('/')}>首页</div>
        <div className="main-headerItem" onClick={() => historyPush('/childOne')}>one</div>
        <div className="main-headerItem" onClick={() => historyPush('/childTwo')}>two</div>
      </div>
      <div className="main-content">
        {children}
        <div id="microContainer" style={{ height: "100%" }}></div>
      </div>
    </div>
  )
}
export default withRouter(Layout);
   