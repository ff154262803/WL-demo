import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 10,
    child:[],//储存左侧导航栏内容
    // ip:'https://unicom-test.zkshiwei.com:12015/api',//请求地址ip
    // ip:'http://platform.hw.zkshiwei.com:30020/api',//请求地址ip
    
    ip:'http://qlv.test.zkshiwei.com/api',//请求地址ip00
    // resip:'https://qlv.test.zkshiwei.com/res/'
    resip:'https://unicom-test.zkshiwei.com:12015/res/'
}

// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
