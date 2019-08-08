const user = {
    state: {
        users: [1,2,3,4]
    },
    getters: {
        userCount(state) {
            return state.users.length
        }
    },
    mutations: {
        foo(state) { // 'foo'
            console.log('user: foo()', state)
        }
    }
}

export default user