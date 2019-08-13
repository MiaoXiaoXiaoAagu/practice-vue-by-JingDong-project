import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  navBottom: true,
  addCartDatas: [], // 购物车数据
  checkAll:false
};

const getters = {
  navShow (state) {
    return state.navBottom
  },
  cartDatas(state){
    return state.addCartDatas;
  },
  figureOut(state){
    return state.addCartDatas.reduce((total,item)=>{
      if(item.state){
        total+=item.product_price*item.num;
      }
      return total;
    },0);
  }
};

const mutations = {
  NAV_B_TOGGLE (state) {
    state.navBottom = !state.navBottom
  },
  ADD_GOODS(state,data){
    if(state.addCartDatas.length===0)
    {
      this.commit('NEW_GOODS',data);
    }
    else{
        let goods=state.addCartDatas.find((item)=> item.product_id===data.product_id);
        if(goods) {this.commit('ADD_GOODS_NUM',goods);}
        else{this.commit('NEW_GOODS',data);}
    }
  },
  ADD_NUM_BTN:(state,id)=>{
    let goods=state.addCartDatas.find((item)=> item.product_id===id);
    goods.num++;
  },
  DECREASE_NUM_BTN(state,id){
    let goods=state.addCartDatas.find((item)=> item.product_id===id);
    if(goods.num>0) {goods.num--;}
  },
  NEW_GOODS(state,data){
      data.state=false;
      data.num=1;
      state.addCartDatas.push(data);
  },
  ADD_GOODS_NUM(state,data){
    data.num++;
  },
  STATE_TOGGLE(state,id){
    let goods=state.addCartDatas.find((item)=> item.product_id===id);
    goods.state=!goods.state;
    state.checkAll=state.addCartDatas.every(item=>item.state);
  },
  CHECKALL_TOGGLE(state){
    state.checkAll=!state.checkAll;
    state.addCartDatas.forEach(item=>item.state=state.checkAll);
  },
  DELETE_GOODS(state,id){
    state.addCartDatas=state.addCartDatas.filter(item=>item.product_id!==id)
  }
};
const actions = {
  navBottomToggle (context) {
    context.commit('NAV_B_TOGGLE')
  },
  addGoods(context,data){
    context.commit('ADD_GOODS',data);
  },
  addNum(context,id) {
    context.commit("ADD_NUM_BTN",id);
  },
  decreaseNum(context,id){
    context.commit("DECREASE_NUM_BTN",id);
  },
  stateToggle(context,id){
    context.commit("STATE_TOGGLE",id);
  },
  checkAllToggle(context){
    context.commit("CHECKALL_TOGGLE");
  },
  deleteGoods(context,id){
    context.commit("DELETE_GOODS",id);
  }
};
const store = new Vuex.Store({
  getters,
  state,
  mutations,
  actions
});

export default store
