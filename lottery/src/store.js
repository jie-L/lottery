import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets:[]

  },
  getters:{
    getzhu(state){
      var zhu=0
      for(var i=0;i<state.tickets.length;i++){
        zhu+=state.tickets[i].zhu
      }
      return zhu
    },
    getjin(state){
      var jin=0
      for(var i=0;i<state.tickets.length;i++){
        jin+=state.tickets[i].jin
      }
      return jin
    }
  },
  mutations: {
    setTickets(state,n){
      state.tickets.push(n)
    },
    delTickets(state,idx){
      state.tickets.splice(idx,1)
    },
    reTickets(state){
      state.tickets=[]
    }

  },
  actions: {
  }
})
