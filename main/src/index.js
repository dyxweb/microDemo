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
start({
  sandbox: {
    strictStyleIsolation: true, // 严格的样式隔离，默认只有子应用之间的隔离，加上之后各应用之间都会样式隔离
    // experimentalStyleIsolation: true,  // 样式类修改添加了子应用的属性优先级变高
  }
});