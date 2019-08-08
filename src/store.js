import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        customer: {
            namespaced: true,
            mutations: {
                foo(state) { // 'customer/foo'
                    console.log('customer: foo()', state)
                }
            }
        },
        user
    }
})

export default store