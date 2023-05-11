/**
 * pageLoyout
 */
import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import { withRouter } from "react-router-dom";
import styles from './index.module.scss';

const { Content } = Layout;
const PageLoyout = (props: any) => {
  const { children, history, location } = props;
  const [activeKey, setActiveKey] = useState(location.pathname); // 激活的menu key
  const menuData = [
    {
      key: '/',
      label: 'react子应用home路由'
    },
    {
      key: '/exer',
      label: 'react子应用exer路由'
    },
  ]

  // menu点击
  const onMenuSelect = ({ item, key } : { item: any, key: string }) => {
    history.push(key);
    setActiveKey(key);
  }

  return (
    <Layout className={styles.pageLayout}>
      <Menu items={menuData} theme="dark" onSelect={onMenuSelect} selectedKeys={activeKey} className={styles.menu} />
      <Content className={styles.content}>
        {children}
      </Content>
    </Layout>
  )
}

export default withRouter(PageLoyout);