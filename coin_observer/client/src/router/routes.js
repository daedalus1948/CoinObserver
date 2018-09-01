import Vue from 'vue';
import VueRouter from 'vue-router';

import info from '../components/info.vue';
import about from '../components/about.vue';
import legal from '../components/legal.vue';
import content from '../components/content.vue';
import itemDetail from '../components/itemDetail.vue';

Vue.use(VueRouter);

const Routes = [
    {path: '/', component: content},
    {path: '/info', component: info},
    {path: '/about', component: about},
    {path: '/legal', component: legal},
    {path: '/:item_symbol', component: itemDetail}
];

export default new VueRouter({
    routes: Routes,
    mode: 'history'
  });
  