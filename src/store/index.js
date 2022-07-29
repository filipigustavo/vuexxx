import Vue from 'vue'
import Vuex from 'vuex'

import zero from './zero'
import one from './one'
import two from './two'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    zero,
    one,
    two
  }
})
