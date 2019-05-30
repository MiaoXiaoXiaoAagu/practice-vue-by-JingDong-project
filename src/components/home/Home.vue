<template>
<div>
  <!--轮播组件-->
  <Banner/>
  <!--搜索区-->
  <Search/>
  <!-- 导航 -->
  <Nav/>
  <!-- 展示 -->
  <List />
</div>
</template>

<script>
  import Banner from "./Banner";
  import List from "./Banner";
  import Nav from "./Banner";
  import Search from "./Banner";
    export default {
        name: "Home",
        data:function () {
          return{
            welcome:"Welcome to Home"
          };
        },
      components:{
          Banner,
          List,
          Nav,
          Search
      }
    }
</script>

<style scoped>

</style>
