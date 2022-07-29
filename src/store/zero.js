import axios from 'axios'

const zero = {
  namespaced: true,
  state: {
    chave: 'valor da chave',
    page: 1,
    res: null
  },
  mutations: {
    setRes(state, payload) {
      state.res = payload
    },
    incrementPage(state) {
      state.page += 1
    }
  },
  actions: {
    getRes({ state, commit }) {
      axios
        .get(`https://reqres.in/api/users?page=${state.page}`)
        .then((res) => commit('setRes', res.data.data))
    },
    changeOne({ commit }) {
      commit('one/setOneKey', 'esse é o novo valor de one', { root: true })
    },
    nextPage({ commit, dispatch }) {
      commit('incrementPage')
      dispatch('getRes')
    }
  },
  getters: {
    getChave(state) {
      return state.chave.split('').reverse().join('')
    }
  },
}

export default zero