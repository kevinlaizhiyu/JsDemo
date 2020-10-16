import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[
      {msg:'123qwertyu',finish:false},
      {msg:'123qwertyu',finish:false},
      {msg:'123qwertyu',finish:false},
      {msg:'123qwertyu',finish:false},
    ]
  },
  mutations: {
    changeName(state,params){
      state.info.push({msg:params,finish:false})
    },
    del(state,index){
      state.info.splice(index,1)
    },
    finished(state,index){
      state.info[index].finish=true
    }
  },
  actions: {
  },
  modules: {
  }
})
