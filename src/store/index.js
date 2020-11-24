import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        num:100
    },
    getters:{},
    mutations:{
        jia(state){
            state.num += 5
        },
        jian(state){
            state.num -= 5
        },
    },
    actions:{}
})
export default store