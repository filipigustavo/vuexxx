import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chave: 'valor da chave',
    res: null
  },
  mutations: {
    setRes(state, payload) {
      state.res = payload
    }
  },
  actions: {
    getRes(context) {
      axios.get('https://reqres.in/api/users?page=2').then((res) => context.commit('setRes', res.data.data))
    }
  },
  getters: {
    getChave(state) {
      return state.chave.split('').reverse().join('')
    }
  },
  modules: {

  }
})
