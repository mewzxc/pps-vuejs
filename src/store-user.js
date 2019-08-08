import Vue from 'vue'
import Vuex from 'vuex'

import actionGetUsers from '@/actions/get-users'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        users: [],
        waiting: false
    },
    getters: {
        userCount(state) {
            return state.users.length
        }
    },
    mutations: {
        mutateUsers(state, param) {
            state.users = param
        },
        mutateWaiting(state, param) {
            state.waiting = param
        }
    },
    actions: {
        actionGetUsers
    }
})

export default store