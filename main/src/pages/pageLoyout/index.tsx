/**
 * pageLoyout
 */
import React, { useState, useEffect } from "react";
import { Layout, Menu } from 'antd';
import { withRouter } from "react-router-dom";
import styles from './index.module.scss';

const { Header, Content } = Layout;
const PageLoyout = (props: any) => {
  const { children, history, location } = props;
  const [activeKey, setActiveKey] = useState(`/${location.pathname.split('/')[1]}`); // 激活的menu key
  const menuData = [
    {
      key: '/',
      label: '主应用home路由'
    },
    {
      key: '/exer',
      label: '主应用exer路由'
    },
    {
      key: '/micro-react',
      label: 'react子应用'
    },
    {
      key: '/micro-vue',
      label: 'vue子应用'
    },
  ]

  // 监听路由变化修改激活状态
  useEffect(() => {
    setActiveKey(`/${props.location.pathname.split('/')[1]}`)
  }, [props.location])

  // menu点击
  const onMenuSelect = ({ item, key } : { item: any, key: string }) => {
    history.push(key);
    setActiveKey(key);
  }

  return (
    <Layout className={styles.pageLayout}>
      <Header className={styles.header}>
        <div className={styles.name}>微前端</div>
        <div className={styles.menu}>
          <Menu items={menuData} mode="horizontal" theme="dark" onSelect={onMenuSelect} selectedKeys={activeKey} />
        </div>
      </Header>
      <Content className={styles.content}>
        {children}
      </Content>
    </Layout>
  )
}

export default withRouter(PageLoyout);