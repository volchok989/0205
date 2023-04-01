import Vue from 'vue'
import Vuex from 'vuex'
import reviewsModule from '@/store/modules/reviewsModule'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    reviewsModule
  },
  plugins: [
    createPersistedState({
      key: '0205'
    })
  ]
})
