import React from 'react';
import { render} from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import App from './route/router.js';
import './index.css';

render(<App />, document.getElementById('root'));
registerMicroApps([
  {
    name: 'childOne',
    entry: '//localhost:9001',
    container: '#microContainer',
    activeRule: '/childOne',
  },
  {
    name: 'childTwo',
    entry: '//localhost:9002',
    container: '#microContainer',
    activeRule: '/childTwo',
  },
]);
// 启动 qiankun
start();