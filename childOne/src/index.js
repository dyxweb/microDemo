import React from 'react';
import ReactDOM from 'react-dom';
import './public-path';
import App from './route/router.js';
import './index.css';

function render(props) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export function bootstrap() {
  return new Promise((resolve) => {
    console.log('[react16] react app bootstraped');
    resolve();
  })
}

export function mount(props) {
  return new Promise((resolve) => {
    console.log('[react16] props from main framework', props);
    render(props);
    resolve();
  })
}

export function unmount(props) {
  return new Promise((resolve) => {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
    resolve();
  })
}
    