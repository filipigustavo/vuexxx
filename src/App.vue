<template>
  <div id="app">
    olá, {{chave}}
    <br />
    get: {{getChave}}
    <hr />
    <template v-if="!!res">
      <span style="display:block;" v-for="item of res" :key="item.id">{{item.email}}</span>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState(['chave', 'res']),
    ...mapGetters(['getChave'])
  },
  methods: {
    ...mapActions(['getRes'])
  },
  mounted() {
    this.getRes()
  }
}
</script>
