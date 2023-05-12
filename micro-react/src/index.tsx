import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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

function render(props: any) {
  const { container } = props;
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/micro-react' : '/'}>
        <PageLoyout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/exer' component={Exer} />
          </Switch>
        </PageLoyout>
      </BrowserRouter>
    </ConfigProvider>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
