import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../views/LandingPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    meta: {
      title: 'JSDC 2021 - 歡迎參加主年會',
    },
    component: LandingPage,
  },
  {
    path: '/jsdc',
    name: 'official',
    beforeEnter() {
      window.open('https://jsdc.tw/', '_blank');
    },
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    meta: {
      title: 'JSDC 2021 - 關於我們',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/speakers',
    name: 'speaker',
    meta: {
      title: 'JSDC 2021 - 講者介紹',
    },
  },
  {
    path: '/timesheets',
    name: 'timesheets',
    meta: {
      title: 'JSDC 2021 - 大會議程',
    },
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    meta: {
      title: 'JSDC 2021 - 合作夥伴',
    },
  },
  {
    path: '/teammember',
    name: 'teammember',
    meta: {
      title: 'JSDC 2021 - 工作團隊',
    },
  },
  {
    path: '/conduct',
    name: 'conduct',
    meta: {
      title: 'JSDC 2021 - 行為準則',
    },
  },
  {
    path: '*',
    name: 'noFound',
    meta: {
      title: 'JSDC 2021 - 你走錯地方了喔！',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'link_active',
  routes,
});

router.beforeEach((to, _, next) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || 'JSDC 2021 - JSDC主年會';
    next();
  });
});

export default router;
