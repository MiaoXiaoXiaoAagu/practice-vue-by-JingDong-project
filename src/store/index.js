import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state={
  navBottom:true,
}
const mutations={
  NAV_B_TOGGLE(state){
    state.navBottom=!state.navBottom;
  }
}
const actions={
  navBottomToggle(context){
    context.commit("NAV_B_TOGGLE");
  }
}
const store=new Vuex.Store({
  state,
  mutations,
  actions
});

export default store

