<template>
  <div id="app">
    <router-view></router-view>
    <NavBottom v-show="navShow"/>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom'
import {mapGetters} from  'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed:{
      ...mapGetters(["navShow"])
  },
  components:{
    NavBottom
  }
}
</script>
<style>

</style>
