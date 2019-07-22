<template>
  <div id="app">
    <router-view></router-view>
    <NavBottom v-if="$store.state.navBottom"/>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods:{},
  components:{
    NavBottom
  }
}
</script>
<style>

</style>
