import Home from '@/pages/home';
import Exer from '@/pages/exer';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/exer',
    name: 'Exer',
    component: Exer
  },
];

export default routes;
