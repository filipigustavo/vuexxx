const two = {
  namespaced: true,
  state: () => ({
    twoKey: 'valor de two key'
  }),
  getters: {
    getTwoKey(state) {
      return state.twoKey.split('').reverse().join('')
    }
  },
  mutations: {
    setTwoKey(state, payload) {
      state.twoKey = payload
    }
  },
  actions: {
    resetTwoKey(context) {
      context.commit('setTwoKey', 'valor de two key')
    }
  }
}

export default two