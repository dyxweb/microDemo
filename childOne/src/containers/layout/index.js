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
        <div className="menuItem" onClick={() => historyPush('/childTwo')}>two</div>
        <div className="menuItem" onClick={() => historyPush('/childOne/list')}>list</div>
        <div className="menuItem" onClick={() => historyPush('/childOne/operate')}>operate</div>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}
export default withRouter(Layout);
   