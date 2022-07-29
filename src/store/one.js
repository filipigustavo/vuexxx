const one = {
  namespaced: true,
  state: () => ({
    oneKey: 'valor de one key'
  }),
  getters: {
    getOneKey(state) {
      return state.oneKey.split('').reverse().join('')
    }
  },
  mutations: {
    setOneKey(state, payload) {
      state.oneKey = payload
    }
  },
  actions: {
    resetOneKey(context) {
      context.commit('setOneKey', 'valor de one key')
    }
  }
}

export default one