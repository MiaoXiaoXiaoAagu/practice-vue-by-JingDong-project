<template>
  <div>
    <CatgoryHead />
    <CatgoryMain/>
  </div>
</template>

<script>
  import CatgoryHead from './CatgoryHead'
  import CatgoryMain from './CatgoryMain'
  export default {
    data () {
      return {
        name:'catgory'
      }
    },
    components:{
      CatgoryHead,
      CatgoryMain
    }

  }

</script>
<style >
  @import '../../assets/css/category.css';
</style>
