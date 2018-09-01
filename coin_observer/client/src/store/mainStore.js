import Vue from 'vue';
import Vuex from 'vuex';

import Mutations from './mutations.js';
import Actions from './actions.js';
import Getters from './getters.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      items: {},
      intervalID: null
    },
    mutations: Mutations,
    actions: Actions,
    getters: Getters
  });