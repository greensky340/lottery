import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 使用vuex

export default new Vuex.Store({
  // state：状态
  state: {
    dlt: [],
    ssq: []
  },
  // mutations可以改变状态的方法集
  mutations: {
    setDlt: (state, codeArr) => {
      state.dlt = codeArr
    },
    setSsq: (state, codeArr) => {
      state.ssq = codeArr
    }
  },
  getters: {
    getDlt: state => {
      return state.dlt
    }
  },
  actions: {

  }
})
