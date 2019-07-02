<template>
    <div class="category_content">
       <CatgoryMainLeft />
       <CatgoryMainRight/>
    </div>
</template>

<script>
import CatgoryMainLeft from './CatgoryMainLeft'
import CatgoryMainRight from './CatgoryMainRight'
export default {
  data () {
    return {
     name:'catgory'
    }
  },
  components:{
    CatgoryMainLeft,
    CatgoryMainRight
  } 
  
}

</script>
<style scoped>

</style>
