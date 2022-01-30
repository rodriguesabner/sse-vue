import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/extensions
import Home from '../views/Home';
// eslint-disable-next-line import/extensions
import OrderFinished from '../views/OrderFinished';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:token',
    name: 'Home',
    component: Home,
  },
  {
    path: '/order/order-finished',
    name: 'OrderFinished',
    component: OrderFinished,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
