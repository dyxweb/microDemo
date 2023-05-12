import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { registerMicroApps, start } from 'qiankun';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import 'antd/dist/antd.css';
import PageLoyout from '@/pages/pageLoyout';
import Home from '@/pages/home';
import Exer from '@/pages/exer';
import MicroContainer from '@/pages/microContainer';
import './index.css';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <PageLoyout>
        {/* 微应用挂载节点 */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/exer' component={Exer} />
          <Route path='/micro-react' component={MicroContainer} />
          <Route path='/micro-vue' component={MicroContainer} />
        </Switch>
      </PageLoyout>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
);

registerMicroApps([
  {
    name: 'micro-react',
    entry: '//localhost:8001',
    container: '#microContainer',
    activeRule: '/micro-react',
  },
  {
    name: 'micro-vue',
    entry: '//localhost:8002',
    container: '#microContainer',
    activeRule: '/micro-vue',
  },
]);
// 启动 qiankun
start({
  sandbox: { experimentalStyleIsolation: true }
});
