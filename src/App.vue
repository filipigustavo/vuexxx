<template>
  <div id="app">
    olá, {{chave}}
    <br />
    get: {{getChave}}
    <hr />
    <template v-if="!!res">
      <span style="display:block;" v-for="item of res" :key="item.id">{{item.email}}</span>
    </template>
    <br />
    <button @click="nextPage">Next page ({{page}})</button>
    <hr />
    ONE
    <br />
    oneKey: {{oneKey}} / {{getOneKey}}
    <hr />
    TWO
    <br />
    twoKey: {{twoKey}} / {{getTwoKey}}
    <hr />
    <button @click="changeOne">Zero change One</button>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters,
  mapState
} from 'vuex'
export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState('zero', ['chave', 'res', 'page']),
    ...mapGetters('zero', ['getChave']),
    ...mapState('one', ['oneKey']),
    ...mapState('two', ['twoKey']),
    ...mapGetters('one', ['getOneKey']),
    ...mapGetters('two', ['getTwoKey'])
  },
  methods: {
    ...mapActions('zero', ['getRes', 'changeOne', 'nextPage'])
  },
  mounted() {
    this.getRes()
  }
}
</script>
