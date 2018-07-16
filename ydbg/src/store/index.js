import Vue from 'vue'
import Vuex from 'vuex'
import headerName from './modules/headerName'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    headerName
  }
})
