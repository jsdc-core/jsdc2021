import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import NoFound from '../views/404.vue';

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
  // {
  //   path: '/jsdc',
  //   name: 'official',
  //   beforeEnter() {
  //     window.open('https://jsdc.tw/', '_blank');
  //   },
  // },
  // {
  //   path: '/aboutus',
  //   name: 'aboutus',
  //   meta: {
  //     title: 'JSDC 2021 - 關於我們',
  //   },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutUs.vue'),
  // },
  // {
  //   path: '/speakers',
  //   name: 'speaker',
  //   meta: {
  //     title: 'JSDC 2021 - 講者介紹',
  //   },
  //   component: () => import('../views/ConfSpeaker.vue'),
  // },
  // {
  //   path: '/timesheets',
  //   name: 'timesheets',
  //   meta: {
  //     title: 'JSDC 2021 - 大會議程',
  //   },
  //   component: () => import('../views/ConfTimesheets.vue'),
  // },
  // {
  //   path: '/sponsors',
  //   name: 'sponsors',
  //   meta: {
  //     title: 'JSDC 2021 - 合作夥伴',
  //   },
  //   component: () => import('../views/ConfSponsors.vue'),
  // },
  // {
  //   path: '/teammember',
  //   name: 'teammember',
  //   meta: {
  //     title: 'JSDC 2021 - 工作團隊',
  //   },
  //   component: () => import('../views/TeamMember.vue'),
  // },
  // {
  //   path: '/conduct',
  //   name: 'conduct',
  //   meta: {
  //     title: 'JSDC 2021 - 行為準則',
  //   },
  //   component: () => import('../views/ConfConduct.vue'),
  // },
  {
    path: '*',
    name: 'nofound',
    meta: {
      title: 'JSDC 2021 - 你迷路了嗎？！',
    },
    component: NoFound,
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
