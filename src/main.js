import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'normalize.css';
import './assets/styles/tailwind.index.css';
import './assets/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#jsdc');
