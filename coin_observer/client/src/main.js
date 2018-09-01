import Vue from 'vue'
import App from './App.vue'

import vueRouter from './router/routes.js';
import vuexStore from './store/mainStore.js';

new Vue({
  el: '#app',
  store: vuexStore,
  router: vueRouter,
  render: h => h(App)
});
