/**
 * pageLoyout
 */
import React, { useState, useEffect } from "react";
import { Layout, Menu } from 'antd';
import { withRouter } from "react-router-dom";
import styles from './index.module.scss';

const { Content } = Layout;
const PageLoyout = (props: any) => {
  const { children, history, location } = props;
  const [activeKey, setActiveKey] = useState(location.pathname); // 激活的menu key
  const menuData = [
    {
      key: '/home',
      label: 'react子应用home路由'
    },
    {
      key: '/exer',
      label: 'react子应用exer路由'
    },
    {
      key: '/',
      label: '主应用'
    },
    {
      key: '/micro-vue/exer',
      label: 'vue子应用exer路由'
    },
  ]

  // 监听路由变化修改激活状态
  useEffect(() => {
    setActiveKey(`/${props.location.pathname.split('/')[1]}`)
  }, [props.location])

  // menu点击
  const onMenuSelect = ({ item, key } : { item: any, key: string }) => {
    if (key.startsWith('/micro-vue') || key === '/') {
      window.history.pushState({}, '', key);
    } else {
      history.push(key);
      setActiveKey(key);
    }
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