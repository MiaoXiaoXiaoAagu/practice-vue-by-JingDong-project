<template>
	<div id="cate_right">
		 <div class="category_right">
	            <div class="category_banner">
	                <a href="#">
	                    <img src="../../assets/images/banner_1.png" alt="">
	                </a>
	            </div>
	            <div class="category_detail">
	                <h3 class="category_n">Hot Category Goods</h3>
	                <ul>
	                    <li class="category_detail_item" v-for="item in rightDatas" :key="item.product_id">
	                        <router-link :to="'/detail/'+item.product_id" class="category_detail_item_link">
	                            <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
	                            <p class="category_detail_item_name">{{item.product_name}}</p>
	                        </router-link>
	                    </li>

	                </ul>
	            </div>
	        </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
     name:'catgory',
     rightDatas:[]
    }
  },
  mounted(){
    if(this.$route.params.id) {
      this.getRightData(this.$route.params.id);
    }
  },
  watch:{   //监听
    //$router   $route
    $route(to,from){   //路由监听      to当前的值   from 旧的值
      console.log(to);
      if(to.params.id){
        this.getRightData(to.params.id);
      }
    }
  },
  methods:{
    getRightData(id){
      this.$http.post('/category/goods',{category_id:parseInt(id)}).then((res)=>{
        console.log(res.data);
				this.rightDatas = res.data;
			},(err)=>{
				console.log(err);
			})
    }
  }
}

</script>
<style scoped>

</style>
