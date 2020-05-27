import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import groups from './modules/groups';
import popup from './modules/popup';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todo,
    groups,
    popup
  }
});