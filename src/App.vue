<template>
  <div id="app">
    <router-view></router-view>
    <NavBottom v-if="!$route.path.includes('detail')"/>
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
