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

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <PageLoyout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/exer' component={Exer} />
          </Switch>
        </PageLoyout>
      </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
);
