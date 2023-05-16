import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import 'antd/dist/antd.css';
import PageLoyout from '@/pages/pageLoyout';
import Home from '@/pages/home';
import Exer from '@/pages/exer';
import './index.css';
import './public-path';

let root: any; // 组件挂载节点
function render(props: any) {
  const { container } = props;
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'));
  root.render(
    <ConfigProvider locale={zhCN}>
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/micro-react' : '/'}>
        <PageLoyout>
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route exact path='/home' component={Home} />
            <Route exact path='/exer' component={Exer} />
          </Switch>
        </PageLoyout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('react子应用 bootstrap');
}

export async function mount(props: any) {
  console.log('react子应用 mount');
  render(props);
}

export async function unmount() {
  console.log('react子应用 unmount');
  root.unmount();
}
