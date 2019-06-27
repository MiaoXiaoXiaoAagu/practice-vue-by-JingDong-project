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
  import List from "./List";
  import Nav from "./Nav";
  import Search from "./Search";
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

<style>
  /* 表示导入外部样式  @import
  @import url(''); */
  @import '../../assets/css/index.css'
</style>
