import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '../store/actions'
import * as mutations from '../store/mutations'
import * as getters from '../store/getters'
import state from '../store/rootState'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store