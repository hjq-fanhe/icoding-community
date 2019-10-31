import Vue from "vue";
import Vuex from "vuex";

import getters from "store/getters";
import mutations from "store/mutations/mutations";
import actions from "store/actions";


Vue.use(Vuex)

const state = {
  user: '',
  loginStatus: true
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}

})

export default store

